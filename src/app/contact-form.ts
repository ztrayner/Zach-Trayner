export class ContactForm {
    constructor(
		public name: string,
		public _replyto: string,
		public message: string,
        public _gotcha?: string,
        public _subject?: string
    ) { }
}
