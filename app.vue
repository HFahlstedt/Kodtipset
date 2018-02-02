<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';

@Component({

})
export default class App extends Vue {
    title: string;

    constructor() {
        super();
        this.title = 'Kodtipset';
    }
}
</script>
