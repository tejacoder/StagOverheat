import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Header, Body,  Title, Container, Content } from 'native-base';

export default class About extends Component {

    renderHeader(){
        const {title} = this.props;

        return (
            <Header>
                <Body>
                    <Title>{title}</Title>
                </Body>
            </Header>
        );
    }

    render() {
        return (
            <Container>
                {this.renderHeader()}
                <Content style={styles.container}>
                    <Text style={styles.welcome}>
                        StagOverheat v0.0001
                    </Text>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});