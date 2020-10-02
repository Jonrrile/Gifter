import React, { useState, useContext } from 'react';
import { Form, FormGroup, FormControl, FormContent, FormFile } from "reactstrap";
import { Button, Card, CardBody, Label, Input } from "reactstrap";
import { PostContext } from "../providers/PostProvider";
//import { useHistory } from "react-router-dom";

/* differences using context as opposed to hooks... No props being based below
You have to useState AND use Context.. */




const PostForm = () => {
    const { addPost } = useContext(PostContext); //using context again here
    const [userProfileId, setUserProfileId] = useState(""); //getting the active user from state??
    const [imageUrl, setImageUrl] = useState(""); //same as profile id getting the parameter from state
    const [title, setTitle] = useState("");
    const [caption, setCaption] = useState("");
    //  const history = useHistory();

    const submit = (e) => {
        const post = {
            imageUrl,
            title,
            caption,
            userProfileId: +userProfileId,
        };
        //essentially the equivalent of a factory function upon submit.
        //    addPost(post).then((p) => {
        //      history.push("/");
        //});
    };

    return (
        <div className="container pt-4">
            <div className="row justify-content-center">
                <Card className="col-sm-12 col-lg-6">
                    <CardBody>
                        <Form>
                            <FormGroup>
                                <Label for="userId">User Id</Label>
                                <Input
                                    id="userId"
                                    onChange={(e) => setUserProfileId(e.target.value)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="imageUrl">Gif URL</Label>
                                <Input
                                    id="imageUrl"
                                    onChange={(e) => setImageUrl(e.target.value)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="title">Title</Label>
                                <Input id="title" onChange={(e) => setTitle(e.target.value)} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="caption">Caption</Label>
                                <Input
                                    id="caption"
                                    onChange={(e) => setCaption(e.target.value)}
                                />
                            </FormGroup>
                        </Form>
                        <Button color="info" onClick={submit}>
                            SUBMIT
                </Button>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
};

export default PostForm;