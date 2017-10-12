import { StyleSheet } from 'aphrodite';

export default StyleSheet.create({
    container: {
        position: 'absolute',
        left: '37%',
        top: '35%',
        width: '500px',
        margin: '0 auto',
        border: '1px solid #666',
        backgroundColor: '#fff'
    },
    mainBody: {
        padding: '20px'
    },
    titleRow: {
        marginRight: 0,
        marginLeft: 0,
        backgroundColor: '#f2f2f2',
        color: '#333'
    },
    statementRow: {
        fontSize: '15px',
        color: '#666',
        textAlign: 'center',
        marginTop: '20px'
    },
    buttonsRow: {
        padding: '18px 15px 0 15px',
        textAlign: 'center',
        marginTop: '20px'
    },
    okButton: {
        marginLeft: '15px',
        width: '100px',
        height: '30px',
        textAlign: 'center'
    },
    titleText: {
        paddingTop: '5px',
        fontSize: '18px',
        marginBottom: '20px'
    }
});