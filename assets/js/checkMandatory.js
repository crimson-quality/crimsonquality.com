let mndFields = ['First Name', 'Last Name', 'Account Name', 'Email', 'Phone'];
let fldLangVal = ['First Name', 'Last Name', 'Company', 'Email', 'Phone'];
let name = '';
let email = '';

function checkMandatory() {
    for (let i = 0; i < mndFields.length; i++) {
        let fieldObj = document.forms['WebToContacts711860000000821001'][mndFields[i]];
        if (fieldObj) {
            if (((fieldObj.value).replace(/^\s+|\s+$/g, '')).length === 0) {
                if (fieldObj.type === 'file') {
                    alert('Please select a file to upload.');
                    fieldObj.focus();
                    return false;
                }
                alert(fldLangVal[i] + ' cannot be empty.');
                fieldObj.focus();
                return false;
            } else if (fieldObj.nodeName === 'SELECT') {
                if (fieldObj.options[fieldObj.selectedIndex].value === '-None-') {
                    alert(fldLangVal[i] + ' cannot be none.');
                    fieldObj.focus();
                    return false;
                }
            } else if (fieldObj.type === 'checkbox') {
                if (fieldObj.checked === false) {
                    alert('Please accept  ' + fldLangVal[i]);
                    fieldObj.focus();
                    return false;
                }
            }
            try {
                if (fieldObj.name === 'Last Name') {
                    name = fieldObj.value;
                }
            } catch (e) {
            }
        }
    }
}
