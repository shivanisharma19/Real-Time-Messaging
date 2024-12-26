    
import React, { useMemo } from "react"
import { db } from "../../store/messageStorage"

const useMessagesFilterAndSort = ({contactId}) => {

   const { isLoading, error, data } = db.useQuery({ messages: {} });
   const messages = data?.messages
   const sortedMessages = useMemo(() => messages?.filter((message) => 
    message.contactId === contactId).sort(
        (a, b) =>
        // @ts-expect-error
        new Date(a.createdAt) - new Date(b.createdAt),
    ), [contactId, messages])

    if (isLoading) {
        return <div>Fetching data...</div>
    }

    if (error) {
        return <div>Error fetching data: {error.message}</div>
    }

   return sortedMessages
}

export default useMessagesFilterAndSort