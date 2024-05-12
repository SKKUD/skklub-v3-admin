import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Divider,
} from "@mui/material";
import styled from "@emotion/styled";
import Image from "next/image";
import { useRef, useState } from "react";
import axiosInterceptorInstance from "../../../axios/axiosInterceptorInstance";

const ProfileCardContent = styled(CardContent)`
    display: flex;
    align-items: center;
    justify-content: center;
    > img {
        border-radius: 20px;
    }
`;

export const AccountProfile = ({ url, clubId }) => {
    const inputRef = useRef(null);
    const [imageUrl, setImageUrl] = useState(url);

    const handleFileUploadClick = () => {
        if (inputRef.current) {
            inputRef.current.click();
        }
    };

    const handleFileUpload = (e) => {
        let data = new FormData();
        let selectedFile = e.target.files[0];
        data.append("logo", selectedFile);

        if (selectedFile) {
            if (confirm("선택한 사진으로 동아리 썸네일을 수정하시겠습니까?")) {
                axiosInterceptorInstance
                    .post(`/club/${clubId}/logo`, data, {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    })
                    .then((resp) => {
                        const image_base =
                            "https://s3.ap-northeast-2.amazonaws.com/skklub.develop/";
                        url = image_base + resp.data.logoSavedName;
                        setImageUrl(url);
                        alert("사진이 성공적으로 수정되었습니다.");
                    })
                    .catch((err) => {
                        console.log(err);
                        alert("사진 수정에 실패했습니다.");
                    });
            }
        }
    };

    return (
        <Card>
            <ProfileCardContent>
                <Image
                    src={imageUrl}
                    alt="club image"
                    width={220}
                    height={220}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
                />
            </ProfileCardContent>
            <Divider />

            <CardActions>
                <Button
                    fullWidth
                    variant="text"
                    onClick={handleFileUploadClick}
                >
                    Upload picture
                </Button>
                <input
                    ref={inputRef}
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={handleFileUpload}
                />
            </CardActions>
        </Card>
    );
};
