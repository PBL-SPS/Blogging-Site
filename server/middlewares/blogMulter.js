const multer = require("multer");
const { nanoid } = require("nanoid");
const path = require("path");
const FOLDER_PATH = "public/uploads/images";
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, `../${FOLDER_PATH}`));
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = nanoid();
        const fileName = file.originalname.toLowerCase().split(" ").join("-");
        cb(null, `${uniqueSuffix}-${fileName}`);
    },
});

const upload = multer({ storage: storage });

module.exports = (req, res, next) => {
    upload.single("poster")(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return next(err);
        } else if (err) {
            return next(err);
        }

        if (req.file) {
            req.body.poster = "uploads/images/" + req.file.filename;
        }
        return next();
    });
};
