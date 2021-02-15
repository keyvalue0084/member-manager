// @flow

import React from "react";

import {
  Container,
  Grid,
  Card,
  Button,
  Table,
  Icon,
  Profile,
  List,
  Media,
  Text,
  Comment,
} from "tabler-react";

import SiteWrapper from "../SiteWrapper.react";

function UserListPage() {
  return (
    <SiteWrapper>
      <div className="my-3 my-md-5">
        <Container>
        <Grid.Col width={12}>          
            <Card>           
              <Card.Header>
                <Card.Title>사용자</Card.Title>    
                <Card.Options>
                  <Button RootComponent="a" color="secondary" size="sm" href="/userregist">
                    등록
                  </Button>                 
                </Card.Options>
              </Card.Header>
              <Table
                responsive
                className="card-table table-vcenter text-nowrap"
                headerItems={[
                  { content: "번호.", className: "w-1" },
                  { content: "이름" },
                  { content: "전화번호" },
                  { content: "지역" },
                  { content: "포인트" },
                  { content: "상태" },
                  { content: "직급" },
                  { content: null },
                  { content: null },
                ]}
                bodyItems={[
                  {
                    key: "1",
                    item: [
                      {
                        content: (
                          <Text RootComponent="span" muted>
                            001401
                          </Text>
                        ),
                      },
                      {
                        content: (
                          <a href="invoice.html" className="text-inherit">
                            Design Works
                          </a>
                        ),
                      },
                      { content: "Carlson Limited" },
                      { content: "87956621" },
                      { content: "15 Dec 2017" },
                      {
                        content: (
                          <React.Fragment>
                            <span className="status-icon bg-success" /> Paid
                          </React.Fragment>
                        ),
                      },
                      { content: "$887" },
                      {
                        alignContent: "right",
                        content: (
                          <React.Fragment>
                            <Button size="sm" color="secondary">
                              Manage
                            </Button>
                            <div className="dropdown">
                              <Button
                                color="secondary"
                                size="sm"
                                isDropdownToggle
                              >
                                Actions
                              </Button>
                            </div>
                          </React.Fragment>
                        ),
                      },
                      { content: <Icon link name="edit" /> },
                    ],
                  },
                ]}
              />
            </Card>
          </Grid.Col>
        </Container>
      </div>
    </SiteWrapper>
  );
}

export default UserListPage;
