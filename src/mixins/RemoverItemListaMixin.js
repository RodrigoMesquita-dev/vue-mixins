export default {
    methods: {
        removerItem() {
            this.itens.pop();
        }
    },
    created() {
        console.log('remover item lista mixin')
    }
}