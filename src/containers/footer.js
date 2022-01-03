import React from 'react';
import Footer from '../components/footer'
import Icon from '../components/icons'

export function FooterContainer()
{
    return(
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                    <Footer.Column>
                        <Footer.Title>Test T</Footer.Title>
                            <Footer.Link href="#"> 
                                <Icon className="fab fa-facebook-f" />
                                    Test 1
                            </Footer.Link>
                            <Footer.Link href="#">
                                <Icon className="fab fa-facebook-f" />
                                    Test 2
                            </Footer.Link>
                            <Footer.Link href="#">
                                <Icon className="fab fa-facebook-f" />
                                    Test 3
                            </Footer.Link>
                            <Footer.Link href="#">Test 4</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Test #</Footer.Title>
                            <Footer.Link href="#">Test A</Footer.Link>
                            <Footer.Link href="#">Test B</Footer.Link>
                            <Footer.Link href="#">Test C</Footer.Link>
                            <Footer.Link href="#">Test D</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Test @</Footer.Title>
                            <Footer.Link href="#">Test ?</Footer.Link>
                            <Footer.Link href="#">Test *</Footer.Link>
                            <Footer.Link href="#">Test &</Footer.Link>
                            <Footer.Link href="#">Test $</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Test (:</Footer.Title>
                            <Footer.Link href="#">Test |:</Footer.Link>
                            <Footer.Link href="#">Test ):</Footer.Link>
                            <Footer.Link href="#">Test /:</Footer.Link>
                            <Footer.Link href="#">Test [:</Footer.Link>
                    </Footer.Column>
                </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}