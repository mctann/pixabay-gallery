export interface Photo {
    id: number
    webformatURL: string
    webformatWidth: number
    webformatHeight: number
    largeImageURL: string
    imageHeight: number
    imageWidth: number
    views: number
    downloads: number
    likes: number
    comments: number
    imageSize: number
    tags: String
    user: String
    userImageURL: string
}

export interface PixabayResponse {
    total: number
    totalHits: number
    hits: Photo[]
}

export interface Filters {
    sortBy: string
    orientation: string
    imageType: string
    category: string
    minimumWidth: string
    minimumHeight: string
    colors: string
}