package com.chat.chatService.model;

public class Message {

    private String sender;

    private String content;

    private String timestamp;

    public Message() {
    }



    public String getSender() {
        return this.sender;
    }

    public void setSender(String sender) {
        this.sender = sender;
    }

    public String getContent() {
        return this.content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getTimestamp() {
        return this.timestamp;
    }

    public void setTimestamp(String timestamp) {
        this.timestamp = timestamp;
    }


    @Override
    public String toString() {
        return "{" +
            " sender='" + getSender() + "'" +
            ", content='" + getContent() + "'" +
            ", timestamp='" + getTimestamp() + "'" +
            "}";
    }

    



    
}
