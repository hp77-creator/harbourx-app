import React, { Component } from 'react'
import { Statistic, Card, Row, Col ,Typography, Button, notification} from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined,PoweroffOutlined } from '@ant-design/icons';
import Razorpay from "razorpay";


import hosts from "./../../hosts.json";
import endpoints from "./../../endpoints.json";


const { Title } = Typography;


export default class Dashboard extends Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }
    payRazorpay = async ()=>{
        const options = {
            key: "rzp_test_DWTr1gwISZP31l",
            currency: "INR",
            amount: 9.3*100,
            name: "Learning To Code Online",
            description: "Test Wallet Transaction",
            image: "https://avatars.githubusercontent.com/u/48829314?v=4",
            order_id: "de.id",
            handler: function (response) {
              alert(response.razorpay_payment_id);
              alert(response.razorpay_order_id);
              alert(response.razorpay_signature);

              notification["success"]({message:"Payment Successfull"})
            },
            prefill: {
              name: "Anirudh Jwala",
              email: "anirudh@gmail.com",
              contact: "9999999999",
            },
          };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
        
    }
    render() {
        return (
            <div style={{padding:"10px",textAlign:"center"}}>
                <Title level={2}>Dashboard</Title>

                <div className="site-statistic-demo-card">
                    <Row gutter={16}>
                    <Col span={12}>
                        <Card>
                        <Statistic
                            title="Owe You"
                            value={11.28}
                            precision={2}
                            valueStyle={{ color: '#3f8600' }}
                            // prefix={<ArrowUpOutlined />}
                            suffix="₹"
                        />
                        
                            <Button
                                type="primary"
                                icon={<PoweroffOutlined />}
                                loading={false}
                                onClick={() => {}}
                                ghost
                            >
                                Send Notification to ₹ Pay
                            </Button>

                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card>
                        <Statistic
                            title="You Owe"
                            value={9.3}
                            precision={2}
                            valueStyle={{ color: '#cf1322' }}
                            // prefix={<ArrowDownOutlined />}
                            suffix="₹"
                        />
                        <Button
                            type="primary"
                            icon={<PoweroffOutlined />}
                            loading={false}
                            onClick={() => this.payRazorpay()}
                        >
                           ₹ Pay Now
                        </Button>
                        </Card>
                    </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
