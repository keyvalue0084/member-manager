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
    userEdit=(id)=>{      
      document.location="/userupdate?id="+id
    }
    userDelete=(id)=>{
      
      fetch('/api/member/deleteMember?id='+id,{
        method: 'get',
        dataType: 'json',
        headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
      })
      .then((response) => response.json())
      .then((responseData) => {                            
          if(window.confirm("정말 삭제하시겠습니까?")){
            let newMemberList = this.state.memberList.filter(member => member.key != id );              
            this.setState({memberList: newMemberList});        
          }
      })
      .catch((error)=>{
        console.log('Error fetching man',error);
      });
    }
    componentDidMount(){
      fetch('/api/member/getMemberList',{
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
                  key: user.id,
                  item: [                    
                    {
                      content: (
                        <a href="/#" className="text-inherit">
                          {user.name}
                        </a>
                      ),
                    },
                    { content: user.tel },
                    { content: user.city},                    
                    { content: user.point },
                    {
                      content: (
                        <React.Fragment>
                           {user.status === 'ACTIVE' ? <div><span className="status-icon bg-success" />활동</div> :<div><span className="status-icon bg-red" />비활동</div> }
                        </React.Fragment>
                      ),
                    },
                    { content: user.type === 'E' ? '운영진' :'정회원' },                        
                    { content: <div><Icon link name="edit" onClick={() => this.userEdit(user.id)}/> <Icon link name="trash" onClick={() => this.userDelete(user.id)}/></div> },
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
