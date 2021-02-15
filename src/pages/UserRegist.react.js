// @flow

import React from "react";
import { Formik,Form as FormikForm,Field,ErrorMessage  } from "formik";
import {
  Container,
  Grid,
  Card,
  Button,
  Form
} from "tabler-react";

import SiteWrapper from "../SiteWrapper.react";


const UserRegistPage = () => (
    <div>      
        <Formik initialValues={{ name:'' ,email: '' }}     
                validate={values => {
                    let errors = {};
                    if (!values.name) {
                      errors.name = "Required";
                    } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
                    ) {
                      errors.email = "Invalid email address";
                    }
                    return errors;
                }}
                onSubmit={(values) => {
                alert(JSON.stringify(values));
                document.location='/userlist'
            }}
        >        
        {({ isSubmitting }) => (
          <FormikForm>
            <SiteWrapper>
                <div className="my-3 my-md-5">
                    <Container>
                    <Grid.Row>       
                        <Grid.Col lg={18}>           
                        <Card>
                            <Card.Body>
                                <Card.Title>사용자 정보 입력</Card.Title>
                                <Grid.Row>
                                    <Grid.Col md={5}>
                                    <Form.Group>
                                        <Form.Label>이름</Form.Label>
                                        <Form.Input
                                        type="text"                          
                                        placeholder="이름"
                                        value=""
                                        name="name"
                                        />
                                    </Form.Group>
                                    </Grid.Col>
                                    <Grid.Col sm={6} md={3}>
                                    <Form.Group>
                                        <Form.Label>전화번호</Form.Label>
                                        <Form.Input
                                        type="text"
                                        placeholder="000-0000-0000"
                                        value=""
                                        name="phone"
                                        />
                                    </Form.Group>
                                    </Grid.Col>
                                    <Grid.Col sm={6} md={4}>
                                    <Form.Group>
                                        <Form.Label>이메일</Form.Label>
                                        <Form.Input type="email" placeholder="Email" name="email"/>
                                    </Form.Group>
                                    </Grid.Col>
                                    <Grid.Col sm={6} md={2}>
                                    <Form.Group>
                                        <Form.Label>지역(시)</Form.Label>
                                        <Form.Input type="text" name="city"/>
                                    </Form.Group>
                                    </Grid.Col>
                                    <Grid.Col sm={6} md={6}>
                                    <Form.Group>
                                        <Form.Label>상세주소</Form.Label>
                                        <Form.Input type="text" name="address"/>
                                    </Form.Group>
                                    </Grid.Col>
                                    <Grid.Col sm={6} md={4}>
                                    <Form.Group>
                                        <Form.Label>포인트</Form.Label>
                                        <Form.Input type="number" name="point"/>
                                    </Form.Group>
                                    </Grid.Col>
                                    <Grid.Col md={6}>                        
                                    <Form.Group>
                                        <Form.Label>구분</Form.Label>
                                        <Form.SwitchStack>
                                            <Form.Switch
                                                type="radio"
                                                name="memberType"
                                                value="E"
                                                label="운영진"
                                            />
                                            <Form.Switch
                                                type="radio"
                                                name="memberType"
                                                value="M"
                                                label="회원"
                                            />   
                                        </Form.SwitchStack>
                                    </Form.Group>
                                    </Grid.Col>
                                    <Grid.Col sm={6} md={6}>
                                    <Form.Group>
                                        <Form.Label>상태</Form.Label>
                                        <Form.SwitchStack>
                                            <Form.Switch
                                                type="radio"
                                                name="status"
                                                value="ACTIVE"
                                                label="활동중"
                                            />
                                            <Form.Switch
                                                type="radio"
                                                name="status"
                                                value="INACTIVE"
                                                label="탈퇴"
                                            />   
                                        </Form.SwitchStack>      
                                    </Form.Group>
                                    </Grid.Col>                    
                                    <Grid.Col md={12}>
                                    <Form.Group className="mb=0" label="소개">
                                        <Form.Textarea
                                        rows={5}
                                        placeholder="간략하게 하고싶은 말을 적어주세요"
                                        >                         
                                        </Form.Textarea>
                                    </Form.Group>
                                    </Grid.Col>
                                </Grid.Row>
                                </Card.Body>
                                <Card.Footer className="text-right">
                                <Button type="submit" color="primary" disabled={isSubmitting}>
                                    저장
                                </Button>
                                </Card.Footer>
                            </Card>
                        </Grid.Col>
                    </Grid.Row>
                    </Container>
                </div>
                </SiteWrapper>
          </FormikForm>
        )}
        </Formik>
     
    </div>
  );
  
  export default UserRegistPage;