import {StyleSheet} from 'react-native';

    const colors = {
        primary_color: '#BF2EF0',
        secondary_color: '#3E34E0',
        tertiary_color: '#FFF6EA',
        quaternary_color: '#E1F7F5',
    };

export const styles = StyleSheet.create({
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
        fontSize: 20,
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
});

export default styles;
