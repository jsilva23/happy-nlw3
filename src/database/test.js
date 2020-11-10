const Database = require('./db.js');
const saveOrphanage = require('./saveOrphanage.js');

Database.then(async db => {
    // inserir dados na tabela
    /*await saveOrphanage(db,     {
        lat: '-8.9111797',
        lng: '13.2690554',
        name: 'Lar do amor',
        about: 'Presta assistência a crianças 06 a 15 anos que se encontrem em situação de risco e/ou vulnerabilidade social.',
        whatsapp: '939606016',
        images: [
            'https://images.unsplash.com/photo-1602958169883-016fdb9458dc?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',

            'https://images.unsplash.com/photo-1570570423586-370eee6c19b1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9'
        ].toString(),
        instructions: 'Venha como se sentir a vontade e traga muito amor e paciência para dar',
        opening_hours: 'Horário de visita das 8h até 18H',
        open_on_weekends: '1'
    })*/

    // consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages");
    console.log(selectedOrphanages);

    //consultar só um orfanato pelo id
    //const orphanages = await db.all("SELECT * FROM orphanages WHERE id = '2'");
    //console.log(orphanages);


    // deletar dados da tabela
    //console.log(await db.run("DELETE FROM orphanages WHERE id = '1'"))
    //console.log(await db.run("DELETE FROM orphanages WHERE id = '2'"))

})
