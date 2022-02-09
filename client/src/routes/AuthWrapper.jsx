import { Box, CircularProgress } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import AxiosInst from "../axios";
import {
    logout,
    selectAuthState,
    selectTokens,
    setAuth,
} from "../redux/auth/slice";

const AuthWrapper = ({ children, spinner = true }) => {
    const authState = useSelector(selectAuthState);
    const tokens = useSelector(selectTokens);
    const dispatch = useDispatch();

    const { isLoading, isError } = useQuery("user", async () => {
        if (authState !== "LOGGINGIN") return;
        const res = await AxiosInst.post("/admin/refreshToken", {
            refreshToken: tokens.refreshToken,
        });
        const admin = await AxiosInst.get("/admin/getAdminByToken", {
            headers: {
                authorization: "Bearer " + res.data.data.accessToken,
            },
        });
        dispatch(
            setAuth({
                ...res.data.data,
                user: admin.data.data,
                authState: "LOGGEDIN",
            })
        );
        return {
            ...res.data.data,
            user: admin.data.data,
        };
    });

    useEffect(() => {
        console.log(isError);
        if (isError) {
            dispatch(logout());
        }
        return () => {};
    }, [isError]);

    if ((authState === "LOGGINGIN" || isLoading) && spinner) {
        return (
            <Box
                flexGrow={1}
                width="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <CircularProgress />
            </Box>
        );
    }
    return <>{children}</>;
};

export default AuthWrapper;
