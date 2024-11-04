export const handleIntegrationMP = async (items)=> {
    const preference = {
        items: items.map((item) => ({
            title: item.name,
            description: item.description,
            picture_url: item.image,
            category_id: "electronics",
            quantity: parseInt(item.count),
            currency_id: "COP",
            unit_price: item.discount
                ? parseInt(item.price - item.price * (item.discount * 0.01))
                : parseInt(item.price),
        })),
        back_urls:{
            success: 'https://github.com/VeePVs',
            failure: 'https://github.com/VeePVs',
            pending: 'https://github.com/VeePVs',
        },
        auto_return: 'approved',
    };

    try {
        const response = await fetch('https://api.mercadopago.com/checkout/preferences', {
            method: "POST",
            headers: {
                'Authorization': `Bearer TEST-1339570972270964-103121-614e57b0acc849a17679b226cdf47a4a-1343654359`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(preference)
        })

        const data = await response.json()
        return data.init_point;

    } catch (error) {
        
    }
}