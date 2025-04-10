import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import { FaShare } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import { FacebookShareButton, WhatsappShareButton } from "react-share";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
export function ButtonShare({ id }) {
    const [open, setOpen] = React.useState(false);
    const [copied, setCopied] = useState(false);
    const handleOpen = () => setOpen(!open);
    // const link = "https://sji-6jvwy.ondigitalocean.app/article/share/" + id;
    // const link = "https://serversji-qiie3.ondigitalocean.app/article/share/" + id;
    const link = `<!doctype html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="icon" href="/src/assets/logo/sji.ico" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- font -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@100..900&display=swap" rel="stylesheet">
  <script src="https://cdn.jwplayer.com/libraries/your-library-id.js"></script>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9025543071219832"
    crossorigin="anonymous"></script>
</head>

<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
  <!-- <script src="echarts.js"></script> -->
</body>

</html>`
    return (
        <>
            <Button color="blue" onClick={handleOpen} variant="gradient" className=" mt-5 flex justify-self-start items-center gap-2">
                <FaShare /> Share
            </Button>
            <Dialog open={open} handler={handleOpen}>
                <DialogHeader>Share to</DialogHeader>
                <DialogBody>
                    <div className=" flex justify-start items-center gap-2">
                        <input className="w-[80%] py-2 px-1 border border-black rounded-lg" type="text" value={link} readOnly />
                        <CopyToClipboard className=" w-[20%]" text={link} onCopy={() => setCopied(true)}>
                            <Button>{copied ? "Copied!" : "Copy"}</Button>
                        </CopyToClipboard>
                    </div>
                </DialogBody>
                <DialogFooter>
                    <div className="w-full flex justify-start items-center gap-2">
                        <FacebookShareButton url={link} hashtag="#SJIInvestment">
                            <FaFacebook className=" text-blue-600" size={30} />
                        </FacebookShareButton>
                        <WhatsappShareButton url={link}>
                            <FaWhatsapp className=" text-green-600" size={30} />
                        </WhatsappShareButton>
                    </div>

                    {/* <Button
                        variant="text"
                        color="red"
                        onClick={handleOpen}
                        className="mr-1"
                    >
                        <span>Cancel</span>
                    </Button>
                    <Button variant="gradient" color="green" onClick={handleOpen}>
                        <span>Confirm</span>
                    </Button> */}
                </DialogFooter>
            </Dialog >
        </>
    );
}