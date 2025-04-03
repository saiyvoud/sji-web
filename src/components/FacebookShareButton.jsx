import React from "react";

const FacebookShareButton = ({ url }) => {
    const _url = encodeURIComponent(url); // Link bạn muốn chia sẻ
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${_url}`;
    const shareToFacebook = () => {
        window.open(facebookShareUrl, "_blank", "width=600,height=400");
    };
    return (
        <button onClick={shareToFacebook} style={{ padding: "10px 20px", background: "#1877F2", color: "#fff", border: "none", cursor: "pointer" }}>
            Share to Facebook
        </button>
    );
};

export default FacebookShareButton;
