// @flow
import React, {Component} from 'react';
import 'whatwg-fetch';
import {
  Container,
  Grid,
  Card,
  Button,
  Table,
  Icon,
  Text,
} from "tabler-react";

import SiteWrapper from "../SiteWrapper.react";

class UserListPage extends Component {
    constructor(){
      super(...arguments);
      this.state = {
        memberList:[]
      };
    }
    componentDidMount(){
      fetch('http://localhost:4000/api/getMemberList',{
        method: 'get',
        dataType: 'json',
        headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
      })
      .then((response) => response.json())
      .then((responseData) => {  
              
              responseData = responseData.map((user)=>{
                return {
                  key: "1",
                  item: [
                    {
                      content: (
                        <Text RootComponent="span" muted>
                          {user.ID}
                        </Text>
                      ),
                    },
                    {
                      content: (
                        <a href="invoice.html" className="text-inherit">
                          {user.NAME}
                        </a>
                      ),
                    },
                    { content: user.TEL },
                    { content: user.CITY},
                    { content: user.POINT },
                    {
                      content: (
                        <React.Fragment>
                          <span className="status-icon bg-success" /> {user.STATUS === '1' ? '활동' :'비활동'}
                        </React.Fragment>
                      ),
                    },
                    { content: user.TYPE === '1' ? '대리' :'정회원' },                        
                    { content: <Icon link name="edit" /> },
                  ],
                } 
              });
              this.setState({memberList: responseData});        
        
      })
      .catch((error)=>{
        console.log('Error fetching man',error);
      });
    }
    render(){
      let memberList = this.state.memberList;
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
                    ]}
                    bodyItems={memberList}
                  />
                </Card>
              </Grid.Col>
            </Container>
          </div>
        </SiteWrapper>
      );
    }
}

export default UserListPage;
