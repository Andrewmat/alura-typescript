import { timed } from './../helpers/decorators/index';

export abstract class View<T> {
    protected elem: JQuery;
    private escape: boolean | null;

    constructor(seletor: string, escapar: boolean | null = null) {
        this.elem = $(seletor);
        this.escape = escapar;
    }

    @timed()
    update(model: T) {
        let template = this.template(model);
        if (this.escape) {
            template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elem.html(template);
    }

    abstract template(model: T): string;
}