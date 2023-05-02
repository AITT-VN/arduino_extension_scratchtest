const iconURL = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYuMDMgMjUxLjY4Ij48ZGVmcz48c3R5bGU+LmNsc' +
'y0xe2ZpbGw6I2ZmZjt9PC9zdHlsZT48L2RlZnM+PGcgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgaWQ9IkxheWVyXzEtMiIgZGF0YS1uYW1lPSJMYXllciAxIj48cGF0aCBjbGFzcz0iY' +
'2xzLTEiIGQ9Ik00NC4yMiwyMS4zMWMwLDguNDMtLjA2LDE2LjczLDAsMjUsLjE0LDE1LjA5LDExLjY4LDIzLjgsMjYuMzUsMjAsNy43LTIsMTMuMS04LDEzLjU3LTE2LC40NS03LjY0LjIzLTE1LjMyLjMtM' +
'jMsMC0yLDAtMy45NSwwLTYuMmg4OS4xNGMwLDgsLjMzLDE1LjgxLS4wNiwyMy41OC0xLDE5LjI1LDE0LjkyLDI1LjMzLDI5LjgyLDIwLjUyLDcuMS0yLjI5LDEwLjM1LTcuNDMsMTAuNDQtMTUuODMuMDktO' +
'S4zMSwwLTE4LjYxLDAtMjguMjEsOS45MywwLDE5LjU3LS42MywyOS4wOS4yLDcuNDIuNjQsMTIuNSw3LjQxLDEzLDE1LC4xMSwxLjUuMDcsMywuMDcsNC41VjIzMS43OGMwLDEzLjY5LTYuMTQsMTkuODktM' +
'TkuNzgsMTkuODlxLTEwOC4xOSwwLTIxNi40MSwwQzYuMTUsMjUxLjY3LDAsMjQ1LjUsMCwyMzEuODNRMCwxMzYuMTIsMCw0MC40MUMwLDI3LDYuMTMsMjAuODUsMTkuNTEsMjAuODRjNy42NiwwLDE1LjMyL' +
'DAsMjMsLjA1QTEyLjI0LDEyLjI0LDAsMCwxLDQ0LjIyLDIxLjMxWk0yMzkuNDQsODYuMDhIMTYuNjdWMjM0Ljc2SDIzOS40NFoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xODEuODQsMjljMC02LjE2L' +
'S4xMi0xMi4zMiwwLTE4LjQ4QzE4Miw0LjA2LDE4NiwuMzMsMTkyLjY4LDBjNy41MS0uMzQsMTIuNTEsMywxMi43MSw5LjU2cS41NywxOS43LDAsMzkuNDJjLS4yLDYuNi01LjIzLDkuOTItMTIuNzIsOS41N' +
'S02Ljc2LS4zNC0xMC41My00LTEwLjg0LTEwLjU0LDAtLjMzLDAtLjY3LDAtMVYyOVoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik03Ni4yMiwyOS4zNmMwLDYuMzMuMTMsMTIuNjUsMCwxOUM3Niw1NS4wO' +
'Sw3Miw1OC42Nyw2NC44NCw1OC43OGMtNy41NS4xMi0xMi4wNS0zLjIzLTEyLjIxLTEwLjA2cS0uNDUtMTkuMiwwLTM4LjQzQzUyLjc5LDMuNTEsNTcuMzcuMTgsNjUsLjM2LDcyLjE1LjU0LDc2LDQuMDUsN' +
'zYuMTksMTAuOSw3Ni4zNCwxNy4wNSw3Ni4yMiwyMy4yMSw3Ni4yMiwyOS4zNloiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xNTAuOTMsMTM1Ljg1Yy00LjE1LDAtOC4zMS0uMTEtMTIuNDUsMC0zLC4xM' +
'S00LjI2LTEuMDktNC4yMy00LjA2LjA2LTcuMy0uMTgtMTQuNjMuMi0yMS45Mi4wNy0xLjM0LDIuNDItMy42MywzLjc5LTMuNjgsOC42Mi0uMzQsMTcuMjctLjE2LDI1LjkxLS4xOSwyLjY1LDAsMy45MywxL' +
'DMuOSwzLjg3LS4xLDcuNDcuMTIsMTUtLjIsMjIuNDIsMCwxLjIyLTIuMTcsMy4yMy0zLjQ3LDMuMzZDMTU5LjkzLDEzNi4xMSwxNTUuNDIsMTM1Ljg1LDE1MC45MywxMzUuODVaIi8+PHBhdGggY2xhc3M9I' +
'mNscy0xIiBkPSJNMTk5LjIxLDEzNS44NWMtNC4xNiwwLTguMzItLjEzLTEyLjQ2LjA1LTMuMi4xNC00LjU1LTEuMDctNC41LTQuMy4xMS03LjE0LjA5LTE0LjI5LDAtMjEuNDMsMC0zLDEuMjctNC4xNyw0L' +
'jIxLTQuMTVxMTIuNzEuMTIsMjUuNDIsMGMyLjg5LDAsNC4yMiwxLDQuMTcsNC4xMS0uMTMsNy4zMS0uMSwxNC42MiwwLDIxLjkzLDAsMi43OC0xLjE1LDMuODctMy44OSwzLjgxQzIwNy44NSwxMzUuNzgsM' +
'jAzLjUzLDEzNS44NSwxOTkuMjEsMTM1Ljg1WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTU1LjIsMTc3LjY0Yy00LjE2LDAtOC4zMS0uMDktMTIuNDYsMC0zLjE0LjEtNC41Ny0xLjExLTQuNTItNC4zN' +
'i4xLTcuMTQuMDctMTQuMjgsMC0yMS40MywwLTIuOTUsMS4yMS00LjEzLDQuMi00LjA4LDguNDcuMTIsMTcsLjEsMjUuNDIsMCwyLjkyLDAsNC4yNS45NSw0LjE5LDQtLjEyLDcuMTQtLjE1LDE0LjI5LDAsM' +
'jEuNDMuMDgsMy4yNy0xLjIzLDQuNS00LjM5LDQuNDFDNjMuNTEsMTc3LjU1LDU5LjM1LDE3Ny42NCw1NS4yLDE3Ny42NFoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xMDMsMTc3LjY0Yy00LDAtOC0uM' +
'TItMTIsMC0zLjM3LjE0LTQuODUtMS4xMy00Ljc3LTQuNjIuMTUtNywuMTItMTQsMC0yMC45MywwLTMuMjEsMS4yNC00LjQsNC40Ny00LjM0cTEyLjQ1LjIyLDI0LjkxLDBjMy4xNiwwLDQuNTMsMSw0LjQ1LDQuMjktLjE1LDcuMTQtLjEzLDE0LjI5LDAsMjEuNDMuMDYsMy0xLjIzLDQuMjEtNC4xNCw0LjE1QzExMS41OSwxNzcuNTgsMTA3LjI3LDE3Ny42NCwxMDMsMTc3LjY0WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTE1MS4zMywxNDcuODRjNC4xNiwwLDguMzEuMDksMTIuNDYsMCwyLjg2LS4wOSw0LjMyLjgsNC4yNywzLjk0LS4xMyw3LjMxLS4xMSwxNC42MywwLDIxLjkzLDAsMi43NS0xLjA3LDQtMy44LDQtOC42NCwwLTE3LjI4LS4wNi0yNS45MiwwLTMsMC00LjExLTEuMzktNC4wOS00LjI3LjA4LTcuMTQuMDctMTQuMjksMC0yMS40MywwLTIuODksMS4wNy00LjI3LDQuMTItNC4xNkMxNDIuNjksMTQ4LDE0NywxNDcuODQsMTUxLjMzLDE0Ny44NFoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xOTkuMjMsMTQ3Ljg0YzQuMzIsMCw4LjY0LjA3LDEzLDAsMi43NS0uMDYsMy45LDEuMDYsMy44NywzLjgzcS0uMTMsMTEsMCwyMS45M2MwLDIuNjYtLjg4LDQuMDgtMy42OCw0LjA3LTguODEsMC0xNy42Mi4xMy0yNi40MS0uMTctMS4yNiwwLTMuNDQtMi4yMi0zLjUtMy40OC0uMzMtNy40Ni0uMTQtMTQuOTQtLjE4LTIyLjQyLDAtMi43NCwxLjI1LTMuODQsNC0zLjc2QzE5MC41OCwxNDcuOTMsMTk0LjkxLDE0Ny44NCwxOTkuMjMsMTQ3Ljg0WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTU1LjIxLDIxOS4yYy00LjE2LDAtOC4zMi0uMTEtMTIuNDgsMC0zLjEzLjExLTQuNTgtMS00LjUyLTQuMzEuMTItNy4xNi4wOC0xNC4zMSwwLTIxLjQ3LDAtMi43MiwxLjEzLTMuODgsMy45LTMuODVxMTMsLjEyLDI2LDBjMi42OCwwLDQsLjksMy45NCwzLjc3cS0uMTcsMTEsMCwyMmMwLDIuOC0xLjEzLDMuOTMtMy44NSwzLjg4QzYzLjg3LDIxOS4xNCw1OS41NCwyMTkuMTksNTUuMjEsMjE5LjJaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTAzLjI3LDIxOS4yYy00LjE2LDAtOC4zMy0uMS0xMi40OCwwLTMuMDkuMS00LjYyLTEtNC41Ni00LjI3LjEyLTcuMTUuMDctMTQuMzEsMC0yMS40NywwLTIuNjgsMS0zLjkzLDMuODQtMy45LDguNjYuMDgsMTcuMzEuMDYsMjYsMCwyLjYyLDAsNCwuOCw0LDMuNzEtLjExLDcuMzItLjEzLDE0LjY1LDAsMjIsLjA2LDMuMi0xLjUyLDQtNC4zMSwzLjk0QzExMS41OSwyMTkuMTMsMTA3LjQzLDIxOS4yLDEwMy4yNywyMTkuMloiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xNTEsMjE5LjJjLTQuMTYsMC04LjMzLS4wOS0xMi40OCwwLTIuOTQuMDgtNC4yNy0xLjA3LTQuMjQtNC4wOHEuMTItMTAuNzQsMC0yMS40N2MwLTMsMS4xOS00LjE0LDQuMTgtNC4xLDguNDkuMTIsMTcsLjEsMjUuNDcsMCwyLjkxLDAsNC4yMy45NSw0LjE3LDRxLS4yMSwxMC43NCwwLDIxLjQ3Yy4wNiwzLjA1LTEuMTgsNC4xOS00LjEyLDQuMTJDMTU5LjYyLDIxOS4xMiwxNTUuMjksMjE5LjIsMTUxLDIxOS4yWiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTE5OS4yLDIxOS4yYy00LjE2LDAtOC4zMi0uMTEtMTIuNDgsMC0zLjE2LjExLTQuNTMtMS4xLTQuNDctNC4zNXEuMTgtMTAuNDgsMC0yMWMtLjA2LTMuMjMsMS4yMy00LjQsNC40NC00LjM1cTEyLjQ4LjIzLDI1LDBjMy4xNi0uMDUsNC41MSwxLDQuNDIsNC4zMXEtLjI1LDEwLjQ5LDAsMjFjLjA5LDMuMjktMS4yLDQuNDgtNC4zOSw0LjM3QzIwNy41MywyMTkuMDksMjAzLjM2LDIxOS4yLDE5OS4yLDIxOS4yWiIvPjwvZz48L2c+PC9zdmc+';

// Core, Team, and Official extension classes should be registered statically with the Extension Manager.
// See: scratch-vm/src/extension-support/extension-manager.js
class Scratch3ArduinoTemplate {
    getInfo () {
        return {
            id: 'arduinoTestExtension',
            parentMode: 'arduino',
            name: 'Template External',
            blockIconURI: iconURL,
            allowBlockTypes: {
                arduinoTest_scheduler_task: -1
            },
            color1: '#69453a',
            color2: '#59352a',
            blocks: [
                {
                    opcode: 'scheduler_init',
                    rawCode: {
                        include: '#include "scheduler.h"\n',
                        setup: 'SCH_Init();\n',
                        loop: 'SCH_Dispatch_Tasks();\n'
                    },
                    text: [
                        {
                            default: 'khởi tạo bộ lập lịch',
                            id: "gui.externalExtension.arduinoTestExtension.scheduler_init"
                        }
                    ],
                    blockType: Scratch.BlockType.COMMAND
                },
                {
                    opcode: 'scheduler_task',
                    rawCode: {
                        function: 'void aTask/*{TASK_ID}*/() {\n' +
                                '/*{DO}*/' +
                                '}\n',
                        setup: 'SCH_Add_Task(aTask/*{TASK_ID}*/, 0, /*{PERIOD}*/ * 1000);\n',
                        code: '',
                        loop: ''
                    },
                    text: [
                        'sau mỗi [PERIOD] giây thực hiện nhiệm vụ [TASK_ID]',
                        '[DO]'
                    ],
                    arguments: {
                        PERIOD: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 5
                        },
                        TASK_ID: {
                            type: Scratch.ArgumentType.INTEGER_NUMBER,
                            defaultValue: 1
                        },
                        DO: {
                            type: Scratch.ArgumentType.STATEMENT
                        }
                    },
                    disablePreviousStatement: true,
                    disableNextStatement: true,
                    blockType: Scratch.BlockType.CUSTOM
                },
                {
                    opcode: 'mqtt_subscribe',
                    customGenerator: "const noQuoteTopic = args.TOPIC.slice(1,-1);"
                        + "return `mqtt.subcribe_topic(${args.TOPIC}, on_receive_${noQuoteTopic});\n`;",
                    text: [
                        'đăng kí kênh [TOPIC]'
                    ],
                    arguments: {
                        TOPIC: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'V1'
                        }
                        
                    },
                    blockType: Scratch.BlockType.COMMAND
                }
            ]
        };
    }
}

Scratch.extensions.register(new Scratch3ArduinoTemplate());
