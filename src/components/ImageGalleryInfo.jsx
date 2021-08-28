import React, { Component } from 'react';
import imagesAPI from '../services/imageApi';
import ImageErrorView from './ImageErrorView';
import ImageGalleryInfo from './ImageGallery'


export default class ImageGalleryIhfo extends Component{
    state = {
        images:[],
        page: 1,
        error: null,
        status: 'idle'
    }
    componentDidUpdate(prevProps, prevState) {
        const prevInput = prevProps.searchInput
        const nextInput = this.props.searchInput
        const prevPage = prevState.page
        const nextPage = this.state.page

        if (prevInput !== nextInput || prevPage !== nextPage) {
            this.setState({ status: 'pending' })
            imagesAPI
                .fetchImagesAPI(nextInput,nextPage)
                .then(({ hits }) => {
                    if (hits.length === 0) {
                        return this.setState({ status:'rejected', error: `не удалось найти изображение по запросу ${nextInput}` })
                    }
                    this.setState(({ images, page }) => ({
                        images: [...images, ...hits],
                        page: page,
                        status:'resolved',
                    }))
                })
                .catch(error => this.setState({ error, status: 'rejected' }))
                
        }
    }
    render() {
        const { images, error , status} = this.state
        // const { searchInput } = this.props;

        if (status === 'idle') {
            return <div>Введите запрос</div>
        }
        if (status === 'pending') {
            return <div>Загружаем...</div>
        }
        if(status === 'rejected') {
            return <ImageErrorView message={ error}/>
        }
        if (status === 'resolved') {
            return <ImageGalleryInfo images={ images}/>
        }
        
    }
}