import {StyleSheet} from 'react-native';

    const colors = {
        primary_color: '#BF2EF0',
        secondary_color: '#3E34E0',
        tertiary_color: '#FFF6EA',
        quaternary_color: '#E1F7F5',
    };

export const styles = StyleSheet.create({
    buttonQ: {
        backgroundColor: '#243E8C',
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 20,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        alignItems: 'center',
        marginBottom:10
    },
    buttonTextQ: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonC: {
        backgroundColor: '#5DADEC',
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 20,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        alignItems: 'center',
    },
    buttonTextC: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    nameItem: {
        fontSize: 28,
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center',
        width: '100%',
        padding: 15,
        backgroundColor: '#243E8C',
    },
    detailsItems: {
        height: 'auto',
        gap: 10,
        padding: 10,
        width: '100%',
    },
    priceItem: {
        color: '#020',
        fontSize: 24,
        fontWeight: '800',
    },
    descriptionItem: {
        color: '#000',
        fontSize: 24,
    },
    containerQC: {
        padding: 15,
        borderBottomWidth: 0.2,
    },
    questionsComments: {
        color: '#000',
        fontSize: 18,
        fontWeight: '500',
    },
    inputQuestionsComments: {
        textAlignVertical: 'top',
        width: 'auto',
        height: 80,
        borderColor: '#000',
        color: '#000',
        borderRadius: 10,
        borderWidth: 0.8,
    },
    containerImage: {
        width: '100%',
        backgroundColor: '#FFF',
        zIndex:10,
    },
    containerItemDetail: {
        width:'100%',
        alignContent: 'center',
    },
    containerPrice: {
        gap: 5,
        flexDirection: 'row',
    },
    priceText: {
        color: '#000',
        fontSize: 36,
        fontWeight: '500',
    },
    discount: {
        color: '#06b806',
        fontSize: 22,
    },
    price: {
        fontSize:18,
        color: '#a3a3a3',
        textDecorationLine: 'line-through',
    },
});

export default styles;
