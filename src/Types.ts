
type userType ={
    id:string
    name:string
}

 type AttributesType={
    title:string
    user:userType
     addedAt: string
     attachments:AttachmentsType[]
}

type AttachmentsType ={
    "id": string
    "addedAt": string
    "updatedAt": string
    "version": number
    "url": string
    "contentType": string
    "originalName": string
    "fileSize": number

}

export type TrackType = {
    id:string
    type:string
    attributes:AttributesType

}

type SelectedAttributesType = {
    "title": string
    "lyrics": string
}


export type SelectedTrackType={
    "id": string
    "attributes": SelectedAttributesType

}
