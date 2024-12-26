import { init, id } from "@instantdb/react"

export const db = init({
   appId : 'acd3ffeb-e6f2-488d-9c2b-e05b3e3353ae',
   devtool: false,
})

export const addMessage = ( contactId: number,text : string) => {
    db.transact(
        db.tx.messages[id()].update({
            text,
            contactId,
            createdAt: Date.now()
        })
    )
}

export const deleteMessage = ( messageId: string) => {
    db.transact(
        db.tx.messages[messageId].delete()
    )
}
  