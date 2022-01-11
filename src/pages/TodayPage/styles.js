import styled from 'styled-components';

const Header = styled.div`
    padding-top: 70px; 
    padding-bottom: 100px; 
`;
const ContainerWrapper = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content:center ;
    margin: 16px;
    gap: 15px;
    .tasks-wrapper{
        display: flex;
        justify-content: space-between;
        width: 100%;
        background-color: white;
        border-radius: 5px;
        padding:13px;
        .tasks-infos h1{
            font-size: 19.976px;
            line-height: 25px;
            color: #666666;
        }
        .tasks-infos p{
            font-size: 12.976px;
            line-height: 16px;
            color: #666666;
        }
        svg{
            width: 69px;
            height: 69px;
            cursor: pointer;
        }
    }
`

const Title = styled.h1`
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
`
const Subtitle = styled.h2`
    font-size: 17.976px;
    line-height: 22px;
    color: #BABABA;
`
const TitleWrapper = styled.div`
`
const CheckCard = styled.div`
    color: ${(props) => (props.isTaskChecked ? "#8fc549" : "#EBEBEB")};
`
const SpanCheck = styled.span`
    color: ${(props) => (props.isTaskChecked ? "#8fc549" : "#EBEBEB")};
`;
const SpanRecord = styled.span`
    color: ${(props) => props.currentSequence === props.highestSequence ? "#8FC549" : "red"};
`


export { Header, ContainerWrapper, Title, Subtitle, TitleWrapper, CheckCard, SpanCheck, SpanRecord };