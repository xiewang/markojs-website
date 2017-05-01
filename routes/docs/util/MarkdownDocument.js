class MarkdownDocument {
    constructor(options) {
        let {
            documentName,
            markdown,
            url,
            filePath
        } = options;

        this.documentName = documentName;
        this.url = url;
        this.markdown = markdown;
        this.filePath = filePath;
    }
}

module.exports = MarkdownDocument;
