import React from 'react';
import '../styles/Preview.css'
import marked from 'marked'
marked.setOptions({
    breaks: true,
});
class Preview extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: this.props.previewText
        }
    }
    getMarkdownText(e) {
        var rawMarkup = marked(this.state.data);
        return { __html: rawMarkup };
    }

    render() {
        return (
            < div className="preview">
                <div id="preview" /* onChange={this.getMarkdownText()} */ dangerouslySetInnerHTML={{ __html: marked(this.props.previewText) }}>

                </div>
            </div >
        )
    }
}

export default Preview;