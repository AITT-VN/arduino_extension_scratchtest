# Template for opencode external extension
This repo is the template of opencode external extension, all external extensions must follow the structure of this repo.

# Directory structure
```bash
├── images
│   ├── icon1.png
│   ├── icon2.png
├── config.json
├── main.js
```

- images (folder): all folder should be put in this file. These image files can be used in config.json only.
- config.json (file): This file is used for config the translation, extension display, ...
    - id: extensionId, This must be unique between multiple external services and mode ID (arduino, yolobit, scratch, ..). The prefix should the the modeId and the postfix is the extension name. Example: arduinoTemplateExternalExtension
    - extensionDisplay: This is used for config the extension display on opencode web.
        - name: name of the extension. Must be a id of translate.
        - iconURL: big icon of extension, path to an image. Example: "/images/Cat03.jpg". This path must start with "/" symbol.
        - insetIconURL: small icon of extension, path to an image. Example: "/images/Cat03.jpg". This path must start with "/" symbol.
        - description: description of the extension. Must be a id of translate.
    - translate: include languages, the key is the language key (vi, en, ...)
        - id of translage: content
- main.js (file): this is the main file, which include javascript module.

# Example
## config.json
```json
{
    "id": "arduinoTestExtension",
    "extensionDisplay": {
        "name": "gui.externalExtension.arduinoTestExtension.name",
        "iconURL": "/images/Cat03.jpg",
        "insetIconURL": "/images/Cat03.jpg",
        "description": "gui.externalExtension.arduinoTestExtension.description"
    },
    "translate": {
        "vi": {
            "gui.externalExtension.arduinoTestExtension.name": "Extension mẫu",
            "gui.externalExtension.arduinoTestExtension.description": "Miêu tả extension mẫu",
            "gui.externalExtension.arduinoTestExtension.scheduler_init": "khởi tạo bộ lập lịch"
        },
        "en": {
            "gui.externalExtension.arduinoTestExtension.name": "Template extension",
            "gui.externalExtension.arduinoTestExtension.description": "Template xtension description",
            "gui.externalExtension.arduinoTestExtension.scheduler_init": "Init scheduler"
        }
    }
}
```
## main.js
- Defining an Extension: Scratch extensions are defined as a single Javascript class which accepts either a reference to the Scratch VM runtime or a "runtime proxy" which handles communication with the Scratch VM across a well defined worker boundary (i.e. the sandbox).

- Due to using importScript in worker. So can not return function (non clonable structure) in getInfo function.

## Annotated Example

```js
// Core, Team, and Official extensions can `require` VM code:
const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const TargetType = require('../../extension-support/target-type');

// ...or VM dependencies:
const formatMessage = require('format-message');

// Core, Team, and Official extension classes should be registered statically with the Extension Manager.
// See: scratch-vm/src/extension-support/extension-manager.js
class SomeBlocks {
    constructor (runtime) {
        /**
         * Store this for later communication with the Scratch VM runtime.
         * If this extension is running in a sandbox then `runtime` is an async proxy object.
         * @type {Runtime}
         */
        this.runtime = runtime;
    }

    /**
     * @return {object} This extension's metadata.
     */
    getInfo () {
        return {
            // Required: the machine-readable name of this extension.
            // Will be used as the extension's namespace.
            // Allowed characters are those matching the regular expression [\w-]: A-Z, a-z, 0-9, and hyphen ("-").
            id: 'someBlocks',

            // Core extensions only: override the default extension block colors.
            color1: '#FF8C1A',
            color2: '#DB6E00',

            // Optional: the human-readable name of this extension as string.
            // This and any other string to be displayed in the Scratch UI may either be
            // a string or a call to `formatMessage`; a plain string will not be
            // translated whereas a call to `formatMessage` will connect the string
            // to the translation map (see below). The `formatMessage` call is
            // similar to `formatMessage` from `react-intl` in form, but will actually
            // call some extension support code to do its magic. For example, we will
            // internally namespace the messages such that two extensions could have
            // messages with the same ID without colliding.
            // See also: https://github.com/yahoo/react-intl/wiki/API#formatmessage
            name: "Arduino"

            // Optional: URI for a block icon, to display at the edge of each block for this
            // extension. Data URI OK.
            // TODO: what file types are OK? All web images? Just PNG?
            blockIconURI: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAFCAAAAACyOJm3AAAAFklEQVQYV2P4DwMMEMgAI/+DEUIMBgAEWB7i7uidhAAAAABJRU5ErkJggg==',

            // Optional: URI for an icon to be displayed in the blocks category menu.
            // If not present, the menu will display the block icon, if one is present.
            // Otherwise, the category menu shows its default filled circle.
            // Data URI OK.
            // TODO: what file types are OK? All web images? Just PNG?
            menuIconURI: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAFCAAAAACyOJm3AAAAFklEQVQYV2P4DwMMEMgAI/+DEUIMBgAEWB7i7uidhAAAAABJRU5ErkJggg==',

            // Optional: Link to documentation content for this extension.
            // If not present, offer no link.
            docsURI: 'https://....',

            // Required: the list of blocks implemented by this extension,
            // in the order intended for display.
            blocks: [
                {
                    // Required: the machine-readable name of this operation.
                    // This will appear in project JSON.
                    opcode: 'myReporter', // becomes 'someBlocks.myReporter'

                    // Required: the kind of block we're defining, from a predefined list.
                    // Fully supported block types:
                    //   BlockType.BOOLEAN - same as REPORTER but returns a Boolean value
                    //   BlockType.COMMAND - a normal command block, like "move {} steps"
                    //   BlockType.HAT - starts a stack if its value changes from falsy to truthy ("edge triggered")
                    //   BlockType.REPORTER - returns a value, like "direction"
                    // Block types in development or for internal use only:
                    //   BlockType.BUTTON - place a button in the block palette
                    //   BlockType.CONDITIONAL - control flow, like "if {}" or "if {} else {}"
                    //     A CONDITIONAL block may return the one-based index of a branch to
                    //     run, or it may return zero/falsy to run no branch.
                    //   BlockType.EVENT - starts a stack in response to an event (full spec TBD)
                    //   BlockType.LOOP - control flow, like "repeat {} {}" or "forever {}"
                    //     A LOOP block is like a CONDITIONAL block with two differences:
                    //     - the block is assumed to have exactly one child branch, and
                    //     - each time a child branch finishes, the loop block is called again.
                    //  BlockType.CUSTOM - this is custom block
                    blockType: BlockType.REPORTER,

                    // Optional, default false: whether or not to block all threads while
                    // this block is busy. This is for things like the "touching color"
                    // block in compatibility mode, and is only needed if the VM runs in a
                    // worker. We might even consider omitting it from extension docs...
                    blockAllThreads: false,

                    // this is the object include code parts (which is used for generating code into decision code part)
                    rawCode: {
                        function: 'void aTask/*{TASK_ID}*/() {\n' +
                                '/*{DO}*/' +
                                '}\n',
                        setup: 'SCH_Add_Task(aTask/*{TASK_ID}*/, 0, /*{PERIOD}*/ * 1000);\n'
                    }
                    
                    // If this exist, the rawCode part will be ignore. This part is a string of function. the below code will be translate into:
                    /**
                     * (args, block) => {
                     *      const noQuoteTopic = args.TOPIC.slice(1,-1);
                     *      return `mqtt.subcribe_topic(${args.TOPIC}, on_receive_${noQuoteTopic});\n`;
                     * }
                     */
                    customGenerator: "const noQuoteTopic = args.TOPIC.slice(1,-1);"
                        + "return `mqtt.subcribe_topic(${args.TOPIC}, on_receive_${noQuoteTopic});\n`;",
                    

                    // Required: the human-readable text on this block, including argument
                    // placeholders. Argument placeholders should be in [MACRO_CASE] and
                    // must be [ENCLOSED_WITHIN_SQUARE_BRACKETS].
                    text: [
                        {
                            default: "ddefault value [TEXT]",
                            id: "gui.externalExtension.template.test"
                        }
                    ]

                    // Required: describe each argument.
                    // Argument order may change during translation, so arguments are
                    // identified by their placeholder name. In those situations where
                    // arguments must be ordered or assigned an ordinal, such as interaction
                    // with Scratch Blocks, arguments are ordered as they are in the default
                    // translation (probably English).
                    arguments: {
                        // Required: the ID of the argument, which will be the name in the
                        // args object passed to the implementation function.
                        LETTER_NUM: {
                            // Required: type of the argument / shape of the block input
                            type: ArgumentType.NUMBER,

                            // Optional: the default value of the argument
                            default: 1
                        },

                        // Required: the ID of the argument, which will be the name in the
                        // args object passed to the implementation function.
                        TEXT: {
                            // Required: type of the argument / shape of the block input
                            type: ArgumentType.STRING,

                                // Optional: the default value of the argument
                            default: formatMessage({
                                id: 'myReporter.TEXT_default',
                                defaultMessage: 'text',
                                description: 'Default for "TEXT" argument of "someBlocks.myReporter"'
                            })
                        }
                    },

                    // Optional: the function implementing this block.
                    // If absent, assume `func` is the same as `opcode`.
                    func: 'myReporter',

                    // Optional: list of target types for which this block should appear.
                    // If absent, assume it applies to all builtin targets -- that is:
                    // [TargetType.SPRITE, TargetType.STAGE]
                    filter: [TargetType.SPRITE]
                },
                {
                    // Another block...
                }
            ],

            // Optional: define extension-specific menus here.
            menus: {
                // Required: an identifier for this menu, unique within this extension.
                menuA: [
                    // Static menu: list items which should appear in the menu.
                    {
                        // Required: the value of the menu item when it is chosen.
                        value: 'itemId1',

                        // Optional: the human-readable label for this item.
                        // Use `value` as the text if this is absent.
                        text: formatMessage({
                            id: 'menuA_item1',
                            defaultMessage: 'Item One',
                            description: 'Label for item 1 of menu A in "Some Blocks" extension'
                        })
                    },

                    // The simplest form of a list item is a string which will be used as
                    // both value and text.
                    'itemId2'
                ],

                // Dynamic menu: returns an array as above.
                // Called each time the menu is opened.
                menuB: 'getItemsForMenuB',

                // The examples above are shorthand for setting only the `items` property in this full form:
                menuC: {
                    // This flag makes a "droppable" menu: the menu will allow dropping a reporter in for the input.
                    acceptReporters: true,

                    // The `item` property may be an array or function name as in previous menu examples.
                    items: [/*...*/] || 'getItemsForMenuC'
                }
            }
        };
    };
}
```
