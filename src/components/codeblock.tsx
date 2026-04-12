"use client";

import { CopyButtonWithText } from "@/components/copy-button";
import { nord, CodeBlock } from "react-code-blocks";

export function getScriptCode(serial: string) {
    return `script_key="${serial}";\nloadstring(game:HttpGet("https://api.luarmor.net/files/v4/loaders/1e8ed553780d0658105a816d5a17b100.lua"))()`;
}

export function ClientCodeBlock({serial, disableCopyButton = false, classNameBlock, classNameButton}: {serial: string, disableCopyButton?: boolean, classNameBlock?: string, classNameButton?: string}) {
    const scriptCode = getScriptCode(serial);
    return (
        <>
            <div className={classNameBlock}>
                <CodeBlock
                    text={scriptCode}
                    language={"lua"}
                    showLineNumbers={false}
                    theme={nord}
                />
            </div>
            {!disableCopyButton && (
                <div className={classNameButton}>
                    <CopyButtonWithText text={scriptCode} /> 
                </div>
            )}
        </> 
    )
}