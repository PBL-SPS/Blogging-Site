import { Box, CircularProgress } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router";
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
    }, {
        retry: false
    });

    useEffect(() => {
        console.log(isError);
        if (isError) {
            dispatch(logout());
        }
        return () => { };
    }, [isError]);


    if (authState == "LOGGEDOUT") return <Navigate to="/" />;

    if ((authState === "LOGGINGIN" || isLoading) && spinner) {
        return (
            <Box
                flexGrow={1}
                width="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <CircularProgress isIndeterminate color="green.300" />
            </Box>
        );
    }
    return <>{children}</>;
};

export default AuthWrapper;
