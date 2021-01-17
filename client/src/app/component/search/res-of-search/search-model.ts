export class SearchModel {
    constructor(
        public filtred: Array<string>,
        public numberOfRecords: number,
        public currentPage: number,
    ){}

}