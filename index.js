const Highlight = (string) => {

   // var text = text.replace(/\s/g, '&nbsp;');

       // <span class="method">&lt;form&gt;</span>
       // <span class="method">&lt;input</span>
       // <span class="global">type</span>
       // =
       // <span class="string">"text"</span>

    string = string.replace(/</g,'&lt;');
    string = string.replace(/>/g, '&gt;');
    string = string.replace(/=(["|'](.*?)["|'])/g, '=<span class="string">$1</span>');
    string = string.replace(/(\s.*)(?==<)/g, ' <span class="global">$1</span>');
    string = string.replace(/(?!<span\sclass=".*">.*<\/span>)(&lt;[^\s&;]+)/g, '<span class="method">$1</span>');
    string = string.replace(/(?!<span\sclass=".*">.*<\/span>)(\/?&gt;)/g, '<span class="method">$1</span>');

    console.log(string);
    return string;

};

exports = Highlight;
