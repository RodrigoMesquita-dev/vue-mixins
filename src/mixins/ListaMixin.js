export default {
    data: () => ({
        itens: [],
        titulo: 'Lista Padrão',// em caso de conflito de propriedades do mixin com components,
        // as propriedades dos componentes serão priorizadas
        item: '' 
    }),
    methods: {
        adicionarItem() {
            this.itens.push(this.item);
            this.item = ''
        }
    },
    created() {
        console.log('lista mixin criado')
    }
}