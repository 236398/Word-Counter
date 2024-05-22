import inquirer from "inquirer";
function counter(paragraph) {
    let freeWhiteSpace = paragraph.replace(/\s/g, "");
    return freeWhiteSpace.length;
}
async function startWordCount(counter) {
    do {
        let res = await inquirer.prompt({
            type: "input",
            name: "paragraph",
            message: "write paragraph here..."
        });
        console.log(counter(res.paragraph));
    } while (true);
}
;
startWordCount(counter);
