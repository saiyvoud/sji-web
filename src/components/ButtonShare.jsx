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
    const link = "https://serversji-qiie3.ondigitalocean.app/article/share/" + id;

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
                            <FaFacebook className=" text-blue-600" size={30}/>
                        </FacebookShareButton>
                        <WhatsappShareButton url={link}>
                            <FaWhatsapp className=" text-green-600" size={30}/>
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