import React, { Component } from 'react';
import InputMask from 'react-input-mask';
 
class PhoneInput extends React.Component {
  render() {
    return <InputMask {...this.props} mask="+7 (999) 999-99-99" maskChar=" " />;
  }
}

export default class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            isFormSend: false
        }
    }
    render() {
        return (
            <section className="form-section">
                <div className="wrapper">
                    <div className="section-text">
                        <h1>
                            Форма с приветами
                        </h1>
                        {
                        this.state.isFormSend
                        ?
                        <div className='success'>
                            <i class="fas fa-check-circle"></i>
                            <h4>
                                Ваше сообщение успешно отправлено
                            </h4>
                        </div>
                        :
                        <form id='form'>
                            <div className="form-group mx-sm-3 mb-2 row">
                                <div className="col-sm-6 ">
                                    <input type="text" className="form-control input-width" placeholder="Ваше имя" />
                                </div>
                                <label className="col-sm-5 col-form-label">Имя нас не сильно волнует и это поле необязательно</label>
                            </div>
                            <div className="form-group mx-sm-3 mb-2 row">
                                <div className="col-sm-6">
                                    <PhoneInput type="tel" className="form-control" name="tel" placeholder="Телефон" required/>
                                </div>
                                <label className="col-sm-5 col-form-label">Для телефона нужна маска для ввода</label>
                            </div>
                            <div className="form-group mx-sm-3 mb-2 row">
                                <div className="col-sm-6">
                                    <input type="email" className="form-control" id="validationCustom05" placeholder="Электронная почта" required/>
                                </div>
                                <label className="col-sm-5 col-form-label">Почту нужно валидировать, что пользователь точно указал адекватный и похожий на настоящий</label>
                            </div>
                            <div className="form-group mx-sm-3 mb-4 row">
                                <div className="col-sm-6">
                                    <textarea type="text" className="form-control" placeholder="Сообщение" style={{ height: '100px'}} required/>
                                </div>
                                <label className="col-sm-5 col-form-label">Без сообщения форму отправлять бессмысленно</label>
                            </div>
                            <div className="form-group mx-sm-3 mb-2 row">
                                <div className="form-check col-sm-6">
                                    <input className="form-check-input" type="checkbox" id="blankCheckbox" required />
                                    <label className="form-check-label" style={{color: 'black', marginLeft: '0px', marginTop: '5px'}}>Согласен с правилами обработки моих персональных данных</label>
                                </div>
                                <label className="col-sm-5 col-form-label">Форма отправляется только, если отметка с согласием стоит</label>
                            </div>
                            <div className="form-group mx-sm-3 mb-2 row">
                                <div className="col-sm-6">
                                    <button className="btn" type="submit" onSubmit ={function (e) {
                                        e.preventDefault()
                                        this.setState({isFormSend:true});
                                        return false
                                        }}>Отправить сообщение</button>
                                </div>
                                <label className="col-sm-5 col-form-label">У кнопки несколько состояний. Яркой и синей она становится когда все нормально и форму можно отправлять.</label>
                            </div>
                        </form>
                        }
                    </div>
                </div>
            </section>
        )
    }
}
