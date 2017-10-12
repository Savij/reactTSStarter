import { StyleSheet } from 'aphrodite';

export default StyleSheet.create({
    container: {
        position: 'absolute',
        left: '37%',
        top: '35%',
        width: '500px',
        marginRight: 'auto',
        marginLeft: 'auto',
        border: '1px solid #666',
        backgroundColor: '#fff'
    },
    titleRow: {
        padding: '10px 5px 0 15px',
        marginRight: 0,
        marginLeft: 0,
        backgroundColor: '#f2f2f2',
        color: '#333'
    },
    statementRow: {
        fontSize: '18px',
        color: '#666',
        textAlign: 'center',
        marginTop: '20px'
    },
    questionRow: {
        fontSize: '18px',
        color: '#666',
        textAlign: 'center',
        marginBottom: '40px'
    },
    buttonsRow: {
        paddingLeft: '15px',
        paddingRight: '15px',
        marginRight: 0,
        marginLeft: 0,
        textAlign: 'center',
        marginBottom: '20px'
    },
    positiveButton: {
        marginLeft: '15px',
        width: '75px',
        textAlign: 'center'
    },
    negativeButton: {
        width: '75px',
        textAlign: 'center'
    },
    titleText: {
        fontSize: '24px'
    }
});