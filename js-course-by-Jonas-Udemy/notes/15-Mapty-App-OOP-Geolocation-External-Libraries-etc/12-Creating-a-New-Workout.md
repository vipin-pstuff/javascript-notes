# Creating a New Workout

- we'll implement the feature of creating a new workout from on UI
- if we see the flow chart , `User submits new workout` is thing which we need to work & inside the App class , <br>
    we have already _newWorkout() as an event handler function for that submit event . so we need to do three things 
    - render workout on map , render workout in list & store workouts in local storage
- `flow chart` : show the high level overview <br>
    & `architecture` : shows the low level details related to code architecture 💡💡💡

## Checking working project

- `1` : when we click on the map then the form is created & focused & after filling the form 
    - then we need to validate the data & then create a new object for that particular workout
    - & then render on left side & the popup & the marker on the map but the form will get hidden with that data
    - so the new running workout object is created with details

- `2` : if we click on the map & after form is generated 
    - then if we try to submit the form without any data then alert will come
    - so each input field of the form should be validated & it's a important part <br>
        of creating any application that works with user inputs

## Steps - working on the form to create a new workout

- `STEP 1` : inside the _newWorkout() method
    ```js
    const months = ['January', 'February', 'March', 'April', 
        'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const form = document.querySelector('.form');
    const containerWorkouts = document.querySelector('.workouts');
    const inputType = document.querySelector('.form__input--type');
    const inputDistance = document.querySelector('.form__input--distance');
    const inputDuration = document.querySelector('.form__input--duration');
    const inputCadence = document.querySelector('.form__input--cadence');
    const inputElevation = document.querySelector('.form__input--elevation');

    class Workout {
        date = new Date()
        id = (Date.now() + "").slice(-10) 

        constructor(coords , distance, duration) {
            this.coords = coords // [lat, lng]
            this.distance = distance // in km
            this.duration = duration // in min
        }
    }

    class Running extends Workout {
        constructor(coords, distance, duration, cadence) {
            super(coords, distance, duration)
            this.cadence = cadence

            this.calcPace()
        }

        calcPace() {
            this.pace = this.duration / this.distance
            return this.pace
        }
    }

    class Cycling extends Workout {
        constructor(coords, distance, duration, elevationGain) {
            super(coords, distance, duration)
            this.elevationGain = elevationGain
            this.calcSpeed()
        }

        calcSpeed() {
            // km/h
            this.speed = this.distance / (this.duration / 60) 
            return this.speed
        }
    }

    // Application architecture
    class App {
        #map ;
        #mapEvent ;

        constructor() {
            this._getPosition() 

            form.addEventListener('submit', this._newWorkout.bind(this))

            inputType.addEventListener('change', this._toggleElevationField)
        }

        _getPosition() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(this._loadMap.bind(this) , function() {
                        alert('Could not get your position')
                    }
                )
            };
        }

        _loadMap(position) {
            const { latitude } = position.coords
            const { longitude } = position.coords
            console.log(`https://www.google.com/maps/@${latitude},${longitude} `) 

            const coords = [latitude, longitude] 
            
            this.#map = L.map('map').setView(coords , 13);
            L.tileLayer(`https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png`, {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(this.#map);

            // handling clicks on the map
            this.#map.on('click', this._showForm.bind(this)) 
        }

        _showForm(mapE) {
            this.#mapEvent = mapE 
            form.classList.remove('hidden')
            inputDistance.focus() 
        }

        _toggleElevationField() {
            inputElevation.closest('.form__row').classList.toggle('.form__row--hidden')
            inputCadence.closest('.form__row').classList.toggle('.form__row--hidden')
        }

        _newWorkout(e) { 
            e.preventDefault()

            // STEP 1 : get the data from the form
            // STEP 2 : Check if data is valid 
            // STEP 3 : if workout is running , create running object
            // STEP 3.1 : if workout is cycling , create cycling object
            // STEP 4 : add new object to workout array
            // STEP 5 : render workout on map as marker
            // STEP 6 : render workout on list
            // STEP 7 : hide the form + clear input fields

            inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value  = ''

            // display maker
            const { lat , lng } = this.#mapEvent.latlng
            L.marker([lat , lng]).addTo(this.#map).bindPopup(L.pop({
                    maxWidth: 250, 
                    minWidth: 100, 
                    autoClose: false , 
                    closeOnClick: false, 
                    className: 'running-popup', 
                })
            ).setPopupContent("Workout").openPopup();
        }
    }

    const app = new App() 
    ```
    - `STEP 1.1` : put display marker code under STEP 5 : render workout on map as marker
        ```js
        // put code before this form STEP 1

        class Workout {
            date = new Date()
            id = (Date.now() + "").slice(-10) 

            constructor(coords , distance, duration) {
                this.coords = coords // [lat, lng]
                this.distance = distance // in km
                this.duration = duration // in min
            }
        }

        class Running extends Workout {
            constructor(coords, distance, duration, cadence) {
                super(coords, distance, duration)
                this.cadence = cadence

                this.calcPace()
            }

            calcPace() {
                this.pace = this.duration / this.distance
                return this.pace
            }
        }

        class Cycling extends Workout {
            constructor(coords, distance, duration, elevationGain) {
                super(coords, distance, duration)
                this.elevationGain = elevationGain
                this.calcSpeed()
            }

            calcSpeed() {
                // km/h
                this.speed = this.distance / (this.duration / 60) 
                return this.speed
            }
        }

        // Application architecture
        class App {
            #map ;
            #mapEvent ;

            constructor() {
                this._getPosition() 

                form.addEventListener('submit', this._newWorkout.bind(this))

                inputType.addEventListener('change', this._toggleElevationField)
            }

            _getPosition() {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(this._loadMap.bind(this) , function() {
                            alert('Could not get your position')
                        }
                    )
                };
            }

            _loadMap(position) {
                const { latitude } = position.coords
                const { longitude } = position.coords
                console.log(`https://www.google.com/maps/@${latitude},${longitude} `) 

                const coords = [latitude, longitude] 
                
                this.#map = L.map('map').setView(coords , 13);
                L.tileLayer(`https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png`, {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }).addTo(this.#map);

                // handling clicks on the map
                this.#map.on('click', this._showForm.bind(this)) 
            }

            _showForm(mapE) {
                this.#mapEvent = mapE 
                form.classList.remove('hidden')
                inputDistance.focus() 
            }

            _toggleElevationField() {
                inputElevation.closest('.form__row').classList.toggle('.form__row--hidden')
                inputCadence.closest('.form__row').classList.toggle('.form__row--hidden')
            }

            _newWorkout(e) { 
                e.preventDefault()

                // STEP 1 : get the data from the form
                // STEP 2 : Check if data is valid 
                // STEP 3 : if workout is running , create running object
                // STEP 3.1 : if workout is cycling , create cycling object
                // STEP 4 : add new object to workout array
                // STEP 5 : render workout on map as marker
                const { lat , lng } = this.#mapEvent.latlng
                L.marker([lat , lng]).addTo(this.#map).bindPopup(L.pop({
                        maxWidth: 250, 
                        minWidth: 100, 
                        autoClose: false , 
                        closeOnClick: false, 
                        className: 'running-popup', 
                    })
                ).setPopupContent("Workout").openPopup();
                // STEP 6 : render workout on list
                // STEP 7 : hide the form + clear input fields

                inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value  = ''
            }
        }

        const app = new App() 
        ```

- `STEP 2` : inside _newWorkout() method , getting the data from the form 
    ```js
    const months = ['January', 'February', 'March', 'April', 
        'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    class Workout {
        date = new Date()
        id = (Date.now() + "").slice(-10) 

        constructor(coords , distance, duration) {
            this.coords = coords // [lat, lng]
            this.distance = distance // in km
            this.duration = duration // in min
        }
    }

    class Running extends Workout {
        constructor(coords, distance, duration, cadence) {
            super(coords, distance, duration)
            this.cadence = cadence

            this.calcPace()
        }

        calcPace() {
            this.pace = this.duration / this.distance
            return this.pace
        }
    }

    class Cycling extends Workout {
        constructor(coords, distance, duration, elevationGain) {
            super(coords, distance, duration)
            this.elevationGain = elevationGain
            this.calcSpeed()
        }

        calcSpeed() {
            // km/h
            this.speed = this.distance / (this.duration / 60) 
            return this.speed
        }
    }

    // Application architecture
    const form = document.querySelector('.form');
    const containerWorkouts = document.querySelector('.workouts');
    const inputType = document.querySelector('.form__input--type');
    const inputDistance = document.querySelector('.form__input--distance');
    const inputDuration = document.querySelector('.form__input--duration');
    const inputCadence = document.querySelector('.form__input--cadence');
    const inputElevation = document.querySelector('.form__input--elevation');
        // here we putted all the required elements inside the application 
        // but we could even put these elements as fields also inside of the App class
            // but in the case , don't do that because then every time we wanted to reference
                // one of these elements , then we would always have to use like this.inputDistance
                // so to access any elements we need to have to use this -> keyword

    class App {
        #map ;
        #mapEvent ;

        constructor() {
            this._getPosition() 

            form.addEventListener('submit', this._newWorkout.bind(this))

            inputType.addEventListener('change', this._toggleElevationField)
        }

        _getPosition() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(this._loadMap.bind(this) , function() {
                        alert('Could not get your position')
                    }
                )
            };
        }

        _loadMap(position) {
            const { latitude } = position.coords
            const { longitude } = position.coords
            console.log(`https://www.google.com/maps/@${latitude},${longitude} `) 

            const coords = [latitude, longitude] 
            
            this.#map = L.map('map').setView(coords , 13);
            L.tileLayer(`https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png`, {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(this.#map);

            // handling clicks on the map
            this.#map.on('click', this._showForm.bind(this)) 
        }

        _showForm(mapE) {
            this.#mapEvent = mapE 
            form.classList.remove('hidden')
            inputDistance.focus() 
        }

        _toggleElevationField() {
            inputElevation.closest('.form__row').classList.toggle('.form__row--hidden')
            inputCadence.closest('.form__row').classList.toggle('.form__row--hidden')
        }

        _newWorkout(e) { 
            e.preventDefault()

            // STEP 1 : get the data from the form
            const type = inputType.value // inside the html , option element has value -> attribute
                // so we'll get the value of that value -> attribute of option element 💡💡💡
            const distance = +inputDistance.value // we'll get the value from input distance in string 
                    // that's why we did explicit type conversion from string into number
            const duration = +inputDuration.value

            // STEP 2 : Check if data is valid 
            // STEP 3 : if workout is running , create running object
            // STEP 3.1 : if workout is cycling , create cycling object
            // STEP 4 : add new object to workout array
            // STEP 5 : render workout on map as marker
            const { lat , lng } = this.#mapEvent.latlng
            L.marker([lat , lng]).addTo(this.#map).bindPopup(L.pop({
                    maxWidth: 250, 
                    minWidth: 100, 
                    autoClose: false , 
                    closeOnClick: false, 
                    className: 'running-popup', 
                })
            ).setPopupContent("Workout").openPopup();
            // STEP 6 : render workout on list
            // STEP 7 : hide the form + clear input fields

            inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value  = ''
        }
    }

    const app = new App() 
    ```
    - now about the cadence & the elevation gain , we actually don't want to get them in STEP 1 of _newWorkout
        - but the cadence , we only want to get if it's running workout
        - & the elevation gain , if the type of workout is cycling
        - because it'll make it easier for us

- `STEP 3` : inside _newWorkout , checking type of workouts of STEP 3 & STEP 3.1 
    ```js
    const months = ['January', 'February', 'March', 'April', 
        'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    class Workout {
        date = new Date()
        id = (Date.now() + "").slice(-10) 

        constructor(coords , distance, duration) {
            this.coords = coords // [lat, lng]
            this.distance = distance // in km
            this.duration = duration // in min
        }
    }

    class Running extends Workout {
        constructor(coords, distance, duration, cadence) {
            super(coords, distance, duration)
            this.cadence = cadence

            this.calcPace()
        }

        calcPace() {
            this.pace = this.duration / this.distance
            return this.pace
        }
    }

    class Cycling extends Workout {
        constructor(coords, distance, duration, elevationGain) {
            super(coords, distance, duration)
            this.elevationGain = elevationGain
            this.calcSpeed()
        }

        calcSpeed() {
            // km/h
            this.speed = this.distance / (this.duration / 60) 
            return this.speed
        }
    }

    // Application architecture
    const form = document.querySelector('.form');
    const containerWorkouts = document.querySelector('.workouts');
    const inputType = document.querySelector('.form__input--type');
    const inputDistance = document.querySelector('.form__input--distance');
    const inputDuration = document.querySelector('.form__input--duration');
    const inputCadence = document.querySelector('.form__input--cadence');
    const inputElevation = document.querySelector('.form__input--elevation');

    class App {
        #map ;
        #mapEvent ;

        constructor() {
            this._getPosition() 

            form.addEventListener('submit', this._newWorkout.bind(this))

            inputType.addEventListener('change', this._toggleElevationField)
        }

        _getPosition() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(this._loadMap.bind(this) , function() {
                        alert('Could not get your position')
                    }
                )
            };
        }

        _loadMap(position) {
            const { latitude } = position.coords
            const { longitude } = position.coords
            console.log(`https://www.google.com/maps/@${latitude},${longitude} `) 

            const coords = [latitude, longitude] 
            
            this.#map = L.map('map').setView(coords , 13);
            L.tileLayer(`https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png`, {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(this.#map);

            // handling clicks on the map
            this.#map.on('click', this._showForm.bind(this)) 
        }

        _showForm(mapE) {
            this.#mapEvent = mapE 
            form.classList.remove('hidden')
            inputDistance.focus() 
        }

        _toggleElevationField() {
            inputElevation.closest('.form__row').classList.toggle('.form__row--hidden')
            inputCadence.closest('.form__row').classList.toggle('.form__row--hidden')
        }

        _newWorkout(e) { 
            e.preventDefault()

            // STEP 1 : get the data from the form
            const type = inputType.value 
            const distance = +inputDistance.value  
            const duration = +inputDuration.value

            // STEP 2 : Check if data is valid 
            // STEP 3 : if workout is running , create running object
            if (type === 'running') {
                const cadence = +inputCadence.value 
            }
            // STEP 3.1 : if workout is cycling , create cycling object
            if (type === 'cycling') {
                const elevation = +inputElevation.value 
            }
            // STEP 4 : add new object to workout array
            // STEP 5 : render workout on map as marker
            const { lat , lng } = this.#mapEvent.latlng
            L.marker([lat , lng]).addTo(this.#map).bindPopup(L.pop({
                    maxWidth: 250, 
                    minWidth: 100, 
                    autoClose: false , 
                    closeOnClick: false, 
                    className: 'running-popup', 
                })
            ).setPopupContent("Workout").openPopup();
            // STEP 6 : render workout on list
            // STEP 7 : hide the form + clear input fields

            inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value  = ''
        }
    }

    const app = new App() 
    ```

- `STEP 4` : checking validation of data
    - now we'll check the validation of data inside each of the type of workouts 
    - because data could be different of each of the type of workouts 💡💡💡
    ```js
    // put code before it from STEP 3

    // Application architecture
    const form = document.querySelector('.form');
    const containerWorkouts = document.querySelector('.workouts');
    const inputType = document.querySelector('.form__input--type');
    const inputDistance = document.querySelector('.form__input--distance');
    const inputDuration = document.querySelector('.form__input--duration');
    const inputCadence = document.querySelector('.form__input--cadence');
    const inputElevation = document.querySelector('.form__input--elevation');

    class App {
        #map ;
        #mapEvent ;

        constructor() {
            this._getPosition() 

            form.addEventListener('submit', this._newWorkout.bind(this))

            inputType.addEventListener('change', this._toggleElevationField)
        }

        _getPosition() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(this._loadMap.bind(this) , function() {
                        alert('Could not get your position')
                    }
                )
            };
        }

        _loadMap(position) {
            const { latitude } = position.coords
            const { longitude } = position.coords
            console.log(`https://www.google.com/maps/@${latitude},${longitude} `) 

            const coords = [latitude, longitude] 
            
            this.#map = L.map('map').setView(coords , 13);
            L.tileLayer(`https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png`, {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(this.#map);

            // handling clicks on the map
            this.#map.on('click', this._showForm.bind(this)) 
        }

        _showForm(mapE) {
            this.#mapEvent = mapE 
            form.classList.remove('hidden')
            inputDistance.focus() 
        }

        _toggleElevationField() {
            inputElevation.closest('.form__row').classList.toggle('.form__row--hidden')
            inputCadence.closest('.form__row').classList.toggle('.form__row--hidden')
        }

        _newWorkout(e) { 
            e.preventDefault()

            // STEP 1 : get the data from the form
            const type = inputType.value 
            const distance = +inputDistance.value  
            const duration = +inputDuration.value

            // STEP 3 : if workout is running , create running object
                // best practices ✅ : for each type of workouts , 
                    // we used if statement instead of if else statement 
                    // & that we'll see more in modern JS & actually it looks a lot cleaner 💡💡💡
            if (type === 'running') {
                const cadence = +inputCadence.value 
                // STEP 2 : Check if data is valid 
                    // 1 - each input fields must contain only number related stuff
                    if (!Number.isFinite(distance)) {
                        return alert("Inputs have to be positive numbers!") 
                        // if the distance is not a number then return immediately
                    }
                        // here we used guard clause
                        // Guard Clause : means we'll check for the opposite 
                            // of what we're originally interested in and if that opposite is true , 
                                // then we simply return the function immediately
                            // so this is more modern JS approach 💡💡💡
            }
            // STEP 3.1 : if workout is cycling , create cycling object
            if (type === 'cycling') {
                const elevation = +inputElevation.value 
            }
            // STEP 4 : add new object to workout array
            // STEP 5 : render workout on map as marker
            const { lat , lng } = this.#mapEvent.latlng
            L.marker([lat , lng]).addTo(this.#map).bindPopup(L.pop({
                    maxWidth: 250, 
                    minWidth: 100, 
                    autoClose: false , 
                    closeOnClick: false, 
                    className: 'running-popup', 
                })
            ).setPopupContent("Workout").openPopup();
            // STEP 6 : render workout on list
            // STEP 7 : hide the form + clear input fields

            inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value  = ''
        }
    }

    const app = new App() 
    ```
    - checking output : after clicking on the map , we'll get the form 
        - & if we write something like letters (which is not a number) in any of the input field 
        - then submit by hitting the Enter key then we'll get the alert message
    - `STEP 4.1` : inside _newWorkout() method , working on the running workout by putting more conditions
        ```js
        // put code before it from STEP 3

        // Application architecture
        const form = document.querySelector('.form');
        const containerWorkouts = document.querySelector('.workouts');
        const inputType = document.querySelector('.form__input--type');
        const inputDistance = document.querySelector('.form__input--distance');
        const inputDuration = document.querySelector('.form__input--duration');
        const inputCadence = document.querySelector('.form__input--cadence');
        const inputElevation = document.querySelector('.form__input--elevation');

        class App {
            #map ;
            #mapEvent ;

            constructor() {
                this._getPosition() 
                form.addEventListener('submit', this._newWorkout.bind(this))
                inputType.addEventListener('change', this._toggleElevationField)
            }

            _getPosition() {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(this._loadMap.bind(this) , function() {
                            alert('Could not get your position')
                        }
                    )
                };
            }

            _loadMap(position) {
                const { latitude } = position.coords
                const { longitude } = position.coords
                console.log(`https://www.google.com/maps/@${latitude},${longitude} `) 

                const coords = [latitude, longitude] 
                
                this.#map = L.map('map').setView(coords , 13);
                L.tileLayer(`https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png`, {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }).addTo(this.#map);

                // handling clicks on the map
                this.#map.on('click', this._showForm.bind(this)) 
            }

            _showForm(mapE) {
                this.#mapEvent = mapE 
                form.classList.remove('hidden')
                inputDistance.focus() 
            }

            _toggleElevationField() {
                inputElevation.closest('.form__row').classList.toggle('.form__row--hidden')
                inputCadence.closest('.form__row').classList.toggle('.form__row--hidden')
            }

            _newWorkout(e) { 
                e.preventDefault()

                // STEP 1 : get the data from the form
                const type = inputType.value 
                const distance = +inputDistance.value  
                const duration = +inputDuration.value

                // STEP 3 : if workout is running , create running object
                if (type === 'running') {
                    const cadence = +inputCadence.value 
                    // STEP 2 : Check if data is valid 
                        // 1 - each input fields must contain only number related stuff
                        if (!Number.isFinite(distance) || 
                            !Number.isFinite(duration) || 
                            !Number.isFinite(cadence)) {  
                            // we used OR operator instead AND operator  
                            // because we don't know mean there can be one input field which is not valid 
                                // or maybe 2 of them which are not valid , so we don't know 
                                // that's why we used OR operator 💡💡💡
                            
                            return alert("Inputs have to be positive numbers!") 
                        }
                }
                // STEP 3.1 : if workout is cycling , create cycling object
                if (type === 'cycling') {
                    const elevation = +inputElevation.value 
                }
                // STEP 4 : add new object to workout array
                // STEP 5 : render workout on map as marker
                const { lat , lng } = this.#mapEvent.latlng
                L.marker([lat , lng]).addTo(this.#map).bindPopup(L.pop({
                        maxWidth: 250, 
                        minWidth: 100, 
                        autoClose: false , 
                        closeOnClick: false, 
                        className: 'running-popup', 
                    })
                ).setPopupContent("Workout").openPopup();
                // STEP 6 : render workout on list
                // STEP 7 : hide the form + clear input fields

                inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value  = ''
            }
        }

        const app = new App() 
        ```
        - now let's refactor the code of `if statement` conditions of _newWorkout() method
    - `STEP 4.2` : refactoring the code of if statement conditions of _newWorkout() method
        - by just creating a function for validation of inputs 
        ```js
        // put code before it from STEP 3

        // Application architecture
        const form = document.querySelector('.form');
        const containerWorkouts = document.querySelector('.workouts');
        const inputType = document.querySelector('.form__input--type');
        const inputDistance = document.querySelector('.form__input--distance');
        const inputDuration = document.querySelector('.form__input--duration');
        const inputCadence = document.querySelector('.form__input--cadence');
        const inputElevation = document.querySelector('.form__input--elevation');

        class App {
            #map ;
            #mapEvent ;

            constructor() {
                this._getPosition() 
                form.addEventListener('submit', this._newWorkout.bind(this))
                inputType.addEventListener('change', this._toggleElevationField)
            }

            _getPosition() {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(this._loadMap.bind(this) , function() {
                            alert('Could not get your position')
                        }
                    )
                };
            }

            _loadMap(position) {
                const { latitude } = position.coords
                const { longitude } = position.coords
                console.log(`https://www.google.com/maps/@${latitude},${longitude} `) 

                const coords = [latitude, longitude] 
                
                this.#map = L.map('map').setView(coords , 13);
                L.tileLayer(`https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png`, {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }).addTo(this.#map);

                // handling clicks on the map
                this.#map.on('click', this._showForm.bind(this)) 
            }

            _showForm(mapE) {
                this.#mapEvent = mapE 
                form.classList.remove('hidden')
                inputDistance.focus() 
            }

            _toggleElevationField() {
                inputElevation.closest('.form__row').classList.toggle('.form__row--hidden')
                inputCadence.closest('.form__row').classList.toggle('.form__row--hidden')
            }

            _newWorkout(e) { 
                // here we used rest operator
                    // so rest operator -> returns the array 💡💡💡
                // & every() array method will return true when the condition true 
                    // & if any one of the condition is false then it'll return false 💡💡💡
                const validInputs = (...inputs) => inputs.every(inp => Number.isFinite(inp))

                e.preventDefault()

                // STEP 1 : get the data from the form
                const type = inputType.value 
                const distance = +inputDistance.value  
                const duration = +inputDuration.value

                // STEP 3 : if workout is running , create running object
                if (type === 'running') {
                    const cadence = +inputCadence.value 
                    // STEP 2 : Check if data is valid 
                        // each input fields must contain only number related stuff
                    if (!validInputs(distance, duration, cadence)) {  
                        
                        return alert("Inputs have to be positive numbers!") 
                    }
                }
                // STEP 3.1 : if workout is cycling , create cycling object
                if (type === 'cycling') {
                    const elevation = +inputElevation.value 
                    // STEP 2 : Check if data is valid 
                        // each input fields must contain only number related stuff
                    if (!validInputs(distance, duration, elevation)) {  
                        
                        return alert("Inputs have to be positive numbers!") 
                    }
                }
                // STEP 4 : add new object to workout array
                // STEP 5 : render workout on map as marker
                const { lat , lng } = this.#mapEvent.latlng
                L.marker([lat , lng]).addTo(this.#map).bindPopup(L.pop({
                        maxWidth: 250, 
                        minWidth: 100, 
                        autoClose: false , 
                        closeOnClick: false, 
                        className: 'running-popup', 
                    })
                ).setPopupContent("Workout").openPopup();
                // STEP 6 : render workout on list
                // STEP 7 : hide the form + clear input fields

                inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value  = ''
            }
        }

        const app = new App() 
        ```
    - `STEP 4.3` : we also want to check if the numbers which is putted inside all the inputs fields of the form
        - is that numbers are positive number or not 
        - because if we put the negative number inside the form & submit then the marker & the popup will be added 
        - so negative values shouldn't be allowed in running workout but in cycling workout , for elevation gain input field , <br>
            negative numbers is allowed if we go down in mountain 💡💡💡
        ```js
        // put code before it from STEP 3

        // Application architecture
        const form = document.querySelector('.form');
        const containerWorkouts = document.querySelector('.workouts');
        const inputType = document.querySelector('.form__input--type');
        const inputDistance = document.querySelector('.form__input--distance');
        const inputDuration = document.querySelector('.form__input--duration');
        const inputCadence = document.querySelector('.form__input--cadence');
        const inputElevation = document.querySelector('.form__input--elevation');

        class App {
            #map ;
            #mapEvent ;

            constructor() {
                this._getPosition() 
                form.addEventListener('submit', this._newWorkout.bind(this))
                inputType.addEventListener('change', this._toggleElevationField)
            }

            _getPosition() {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(this._loadMap.bind(this) , function() {
                            alert('Could not get your position')
                        }
                    )
                };
            }

            _loadMap(position) {
                const { latitude } = position.coords
                const { longitude } = position.coords
                console.log(`https://www.google.com/maps/@${latitude},${longitude} `) 

                const coords = [latitude, longitude] 
                
                this.#map = L.map('map').setView(coords , 13);
                L.tileLayer(`https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png`, {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }).addTo(this.#map);

                // handling clicks on the map
                this.#map.on('click', this._showForm.bind(this)) 
            }

            _showForm(mapE) {
                this.#mapEvent = mapE 
                form.classList.remove('hidden')
                inputDistance.focus() 
            }

            _toggleElevationField() {
                inputElevation.closest('.form__row').classList.toggle('.form__row--hidden')
                inputCadence.closest('.form__row').classList.toggle('.form__row--hidden')
            }

            _newWorkout(e) { 
                const validInputs = (...inputs) => inputs.every(inp => Number.isFinite(inp))

                // we'll be checking for positive number 
                    // best practice ✅ : is to create small helper functions for testing complex conditions 💡💡💡
                const allPositive = (...inputs) => inputs.every(inp => inp > 0)

                e.preventDefault()

                // STEP 1 : get the data from the form
                const type = inputType.value 
                const distance = +inputDistance.value  
                const duration = +inputDuration.value

                // STEP 3 : if workout is running , create running object
                if (type === 'running') {
                    const cadence = +inputCadence.value 
                    // STEP 2 : Check if data is valid 
                        // each input fields must contain only number related stuff
                    if (!validInputs(distance, duration, cadence) || !all(Positive(distance, duration, cadence))) {  
                        return alert("Inputs have to be positive numbers!") 
                    }
                }
                // STEP 3.1 : if workout is cycling , create cycling object
                if (type === 'cycling') {
                    const elevation = +inputElevation.value 
                    // STEP 2 : Check if data is valid 
                        // each input fields must contain only number related stuff
                    if (!validInputs(distance, duration, elevation) || !all(Positive(distance, duration))) {  
                        // here we only wants to validate for positive numbers for these two , not for elevation 💡💡💡

                        return alert("Inputs have to be positive numbers!") 
                    }
                }
                // STEP 4 : add new object to workout array
                // STEP 5 : render workout on map as marker
                const { lat , lng } = this.#mapEvent.latlng
                L.marker([lat , lng]).addTo(this.#map).bindPopup(L.pop({
                        maxWidth: 250, 
                        minWidth: 100, 
                        autoClose: false , 
                        closeOnClick: false, 
                        className: 'running-popup', 
                    })
                ).setPopupContent("Workout").openPopup();
                // STEP 6 : render workout on list
                // STEP 7 : hide the form + clear input fields

                inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value  = ''
            }
        }

        const app = new App() 
        ```
        - checking output : after clicking on the map & the form will be created 
            - then if we write negative numbers in distance input field then we'll get alert()
            - now select the type as cycling & inside distance input - give 2 , in duration - give 2 <br>
                & inside elevation gain - give -2 & hit Enter key then we'll get the popup with the marker on the map
    - `STEP 4.4` : creating object based on workout type
        ```js
        // put code before it from STEP 3

        // Application architecture
        const form = document.querySelector('.form');
        const containerWorkouts = document.querySelector('.workouts');
        const inputType = document.querySelector('.form__input--type');
        const inputDistance = document.querySelector('.form__input--distance');
        const inputDuration = document.querySelector('.form__input--duration');
        const inputCadence = document.querySelector('.form__input--cadence');
        const inputElevation = document.querySelector('.form__input--elevation');

        class App {
            #map ;
            #mapEvent ;
            #workouts = [] ;

            constructor() {
                this._getPosition() 
                form.addEventListener('submit', this._newWorkout.bind(this))
                inputType.addEventListener('change', this._toggleElevationField)
            }

            _getPosition() {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(this._loadMap.bind(this) , function() {
                            alert('Could not get your position')
                        }
                    )
                };
            }

            _loadMap(position) {
                const { latitude } = position.coords
                const { longitude } = position.coords
                console.log(`https://www.google.com/maps/@${latitude},${longitude} `) 

                const coords = [latitude, longitude] 
                
                this.#map = L.map('map').setView(coords , 13);
                L.tileLayer(`https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png`, {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }).addTo(this.#map);

                // handling clicks on the map
                this.#map.on('click', this._showForm.bind(this)) 
            }

            _showForm(mapE) {
                this.#mapEvent = mapE 
                form.classList.remove('hidden')
                inputDistance.focus() 
            }

            _toggleElevationField() {
                inputElevation.closest('.form__row').classList.toggle('.form__row--hidden')
                inputCadence.closest('.form__row').classList.toggle('.form__row--hidden')
            }

            _newWorkout(e) { 
                const validInputs = (...inputs) => inputs.every(inp => Number.isFinite(inp))
                const allPositive = (...inputs) => inputs.every(inp => inp > 0)

                e.preventDefault()

                // STEP 1 : get the data from the form
                const type = inputType.value 
                const distance = +inputDistance.value  
                const duration = +inputDuration.value
                const { lat , lng } = this.#mapEvent.latlng

                // STEP 3 : if workout is running , create running object
                if (type === 'running') {
                    const cadence = +inputCadence.value 
                    // STEP 2 : Check if data is valid 
                        // each input fields must contain only number related stuff
                    if (!validInputs(distance, duration, cadence) || !all(Positive(distance, duration, cadence))) {  
                        return alert("Inputs have to be positive numbers!") 
                    }

                    const workout = new Running([lat, lng], distance, duration)
                        // as first argument of Running class , we need to pass coords in array form
                            // that's why we putted -> const { lat , lng } = this.#mapEvent.latlng at above
                    this.#workout.push(workout) // we created #workout private property inside App class
                }
                // STEP 3.1 : if workout is cycling , create cycling object
                if (type === 'cycling') {
                    const elevation = +inputElevation.value 
                    // STEP 2 : Check if data is valid 
                        // each input fields must contain only number related stuff
                    if (!validInputs(distance, duration, elevation) || !all(Positive(distance, duration))) {  
                        return alert("Inputs have to be positive numbers!") 
                    }

                }
                // STEP 4 : add new object to workout array
                // STEP 5 : render workout on map as marker

                L.marker([lat , lng]).addTo(this.#map).bindPopup(L.pop({
                        maxWidth: 250, 
                        minWidth: 100, 
                        autoClose: false , 
                        closeOnClick: false, 
                        className: 'running-popup', 
                    })
                ).setPopupContent("Workout").openPopup();
                // STEP 6 : render workout on list
                // STEP 7 : hide the form + clear input fields

                inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value  = ''
            }
        }

        const app = new App() 
        ```

- `STEP 5` : adding new object to workout array
    ```js
    // put code before it from STEP 3

    // Application architecture
    const form = document.querySelector('.form');
    const containerWorkouts = document.querySelector('.workouts');
    const inputType = document.querySelector('.form__input--type');
    const inputDistance = document.querySelector('.form__input--distance');
    const inputDuration = document.querySelector('.form__input--duration');
    const inputCadence = document.querySelector('.form__input--cadence');
    const inputElevation = document.querySelector('.form__input--elevation');

    class App {
        #map ;
        #mapEvent ;
        #workouts = [] ;

        constructor() {
            this._getPosition() 
            form.addEventListener('submit', this._newWorkout.bind(this))
            inputType.addEventListener('change', this._toggleElevationField)
        }

        _getPosition() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(this._loadMap.bind(this) , function() {
                        alert('Could not get your position')
                    }
                )
            };
        }

        _loadMap(position) {
            const { latitude } = position.coords
            const { longitude } = position.coords
            console.log(`https://www.google.com/maps/@${latitude},${longitude} `) 

            const coords = [latitude, longitude] 
            
            this.#map = L.map('map').setView(coords , 13);
            L.tileLayer(`https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png`, {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(this.#map);

            // handling clicks on the map
            this.#map.on('click', this._showForm.bind(this)) 
        }

        _showForm(mapE) {
            this.#mapEvent = mapE 
            form.classList.remove('hidden')
            inputDistance.focus() 
        }

        _toggleElevationField() {
            inputElevation.closest('.form__row').classList.toggle('.form__row--hidden')
            inputCadence.closest('.form__row').classList.toggle('.form__row--hidden')
        }

        _newWorkout(e) { 
            const validInputs = (...inputs) => inputs.every(inp => Number.isFinite(inp))
            const allPositive = (...inputs) => inputs.every(inp => inp > 0)

            e.preventDefault()

            // STEP 1 : get the data from the form
            const type = inputType.value 
            const distance = +inputDistance.value  
            const duration = +inputDuration.value
            const { lat , lng } = this.#mapEvent.latlng

            // STEP 3 : if workout is running , create running object
            if (type === 'running') {
                const cadence = +inputCadence.value 
                // STEP 2 : Check if data is valid 
                    // each input fields must contain only number related stuff
                if (!validInputs(distance, duration, cadence) || !all(Positive(distance, duration, cadence))) {  
                    return alert("Inputs have to be positive numbers!") 
                }

                const workout = new Running([lat, lng], distance, duration)
            }
            // STEP 3.1 : if workout is cycling , create cycling object
            if (type === 'cycling') {
                const elevation = +inputElevation.value 
                // STEP 2 : Check if data is valid 
                    // each input fields must contain only number related stuff
                if (!validInputs(distance, duration, elevation) || !all(Positive(distance, duration))) {  
                    return alert("Inputs have to be positive numbers!") 
                }
            }
            // STEP 4 : add new object to workout array
            this.#workout.push(workout) 
                // but here problem comes because workout -> variable is inside the if (type === 'running') block scope

            // STEP 5 : render workout on map as marker

            L.marker([lat , lng]).addTo(this.#map).bindPopup(L.pop({
                    maxWidth: 250, 
                    minWidth: 100, 
                    autoClose: false , 
                    closeOnClick: false, 
                    className: 'running-popup', 
                })
            ).setPopupContent("Workout").openPopup();
            // STEP 6 : render workout on list
            // STEP 7 : hide the form + clear input fields

            inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value  = ''
        }
    }

    const app = new App() 
    ```
    - `STEP 5.1` : making the `workout` variable accessible outside the block scope , so that we can push
        ```js
        // put code before it from STEP 3

        // Application architecture
        const form = document.querySelector('.form');
        const containerWorkouts = document.querySelector('.workouts');
        const inputType = document.querySelector('.form__input--type');
        const inputDistance = document.querySelector('.form__input--distance');
        const inputDuration = document.querySelector('.form__input--duration');
        const inputCadence = document.querySelector('.form__input--cadence');
        const inputElevation = document.querySelector('.form__input--elevation');

        class App {
            #map ;
            #mapEvent ;
            #workouts = [] ;

            constructor() {
                this._getPosition() 
                form.addEventListener('submit', this._newWorkout.bind(this))
                inputType.addEventListener('change', this._toggleElevationField)
            }

            _getPosition() {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(this._loadMap.bind(this) , function() {
                            alert('Could not get your position')
                        }
                    )
                };
            }

            _loadMap(position) {
                const { latitude } = position.coords
                const { longitude } = position.coords
                console.log(`https://www.google.com/maps/@${latitude},${longitude} `) 

                const coords = [latitude, longitude] 
                
                this.#map = L.map('map').setView(coords , 13);
                L.tileLayer(`https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png`, {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }).addTo(this.#map);

                // handling clicks on the map
                this.#map.on('click', this._showForm.bind(this)) 
            }

            _showForm(mapE) {
                this.#mapEvent = mapE 
                form.classList.remove('hidden')
                inputDistance.focus() 
            }

            _toggleElevationField() {
                inputElevation.closest('.form__row').classList.toggle('.form__row--hidden')
                inputCadence.closest('.form__row').classList.toggle('.form__row--hidden')
            }

            _newWorkout(e) { 
                const validInputs = (...inputs) => inputs.every(inp => Number.isFinite(inp))
                const allPositive = (...inputs) => inputs.every(inp => inp > 0)

                e.preventDefault()

                // STEP 1 : get the data from the form
                const type = inputType.value 
                const distance = +inputDistance.value  
                const duration = +inputDuration.value
                const { lat , lng } = this.#mapEvent.latlng
                const workout ;

                // STEP 3 : if workout is running , create running object
                if (type === 'running') {
                    const cadence = +inputCadence.value 
                    // STEP 2 : Check if data is valid 
                        // each input fields must contain only number related stuff
                    if (!validInputs(distance, duration, cadence) || !all(Positive(distance, duration, cadence))) {  
                        return alert("Inputs have to be positive numbers!") 
                    }

                    workout = new Running([lat, lng], distance, duration, cadence)
                }
                // STEP 3.1 : if workout is cycling , create cycling object
                if (type === 'cycling') {
                    const elevation = +inputElevation.value 
                    // STEP 2 : Check if data is valid 
                        // each input fields must contain only number related stuff
                    if (!validInputs(distance, duration, elevation) || !all(Positive(distance, duration))) {  
                        return alert("Inputs have to be positive numbers!") 
                    }

                    workout = new Cycling([lat, lng], distance, duration, elevation)
                }
                // STEP 4 : add new object to workout array
                this.#workout.push(workout) 
                console.log(workout) 

                // STEP 5 : render workout on map as marker

                L.marker([lat , lng]).addTo(this.#map).bindPopup(L.pop({
                        maxWidth: 250, 
                        minWidth: 100, 
                        autoClose: false , 
                        closeOnClick: false, 
                        className: 'running-popup', 
                    })
                ).setPopupContent("Workout").openPopup();
                // STEP 6 : render workout on list
                // STEP 7 : hide the form + clear input fields

                inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value  = ''
            }
        }

        const app = new App() 
        ```
        - checking output : of console.log(workout) 
            - so we'll get the Running object correctly
            - so adding a new workout task is completed which is important one
    - `STEP 5.2` : showing the cycling popup with orange border & for running popup with green
        ```js
        // put code before it from STEP 3

        // Application architecture
        const form = document.querySelector('.form');
        const containerWorkouts = document.querySelector('.workouts');
        const inputType = document.querySelector('.form__input--type');
        const inputDistance = document.querySelector('.form__input--distance');
        const inputDuration = document.querySelector('.form__input--duration');
        const inputCadence = document.querySelector('.form__input--cadence');
        const inputElevation = document.querySelector('.form__input--elevation');

        class App {
            #map ;
            #mapEvent ;
            #workouts = [] ;

            constructor() {
                this._getPosition() 
                form.addEventListener('submit', this._newWorkout.bind(this))
                inputType.addEventListener('change', this._toggleElevationField)
            }

            _getPosition() {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(this._loadMap.bind(this) , function() {
                            alert('Could not get your position')
                        }
                    )
                };
            }

            _loadMap(position) {
                const { latitude } = position.coords
                const { longitude } = position.coords
                console.log(`https://www.google.com/maps/@${latitude},${longitude} `) 

                const coords = [latitude, longitude] 
                
                this.#map = L.map('map').setView(coords , 13);
                L.tileLayer(`https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png`, {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }).addTo(this.#map);

                // handling clicks on the map
                this.#map.on('click', this._showForm.bind(this)) 
            }

            _showForm(mapE) {
                this.#mapEvent = mapE 
                form.classList.remove('hidden')
                inputDistance.focus() 
            }

            _toggleElevationField() {
                inputElevation.closest('.form__row').classList.toggle('.form__row--hidden')
                inputCadence.closest('.form__row').classList.toggle('.form__row--hidden')
            }

            _newWorkout(e) { 
                const validInputs = (...inputs) => inputs.every(inp => Number.isFinite(inp))
                const allPositive = (...inputs) => inputs.every(inp => inp > 0)

                e.preventDefault()

                // STEP 1 : get the data from the form
                const type = inputType.value 
                const distance = +inputDistance.value  
                const duration = +inputDuration.value
                const { lat , lng } = this.#mapEvent.latlng
                const workout ;

                // STEP 3 : if workout is running , create running object
                if (type === 'running') {
                    const cadence = +inputCadence.value 
                    // STEP 2 : Check if data is valid 
                        // each input fields must contain only number related stuff
                    if (!validInputs(distance, duration, cadence) || !all(Positive(distance, duration, cadence))) {  
                        return alert("Inputs have to be positive numbers!") 
                    }

                    workout = new Running([lat, lng], distance, duration, cadence)
                }
                // STEP 3.1 : if workout is cycling , create cycling object
                if (type === 'cycling') {
                    const elevation = +inputElevation.value 
                    // STEP 2 : Check if data is valid 
                        // each input fields must contain only number related stuff
                    if (!validInputs(distance, duration, elevation) || !all(Positive(distance, duration))) {  
                        return alert("Inputs have to be positive numbers!") 
                    }

                    workout = new Cycling([lat, lng], distance, duration, elevation)
                }
                // STEP 4 : add new object to workout array
                this.#workout.push(workout) 
                console.log(workout) 

                // STEP 5 : render workout on map as marker
                this.renderWorkoutMarker(workout) 
                    // Note : here we didn't used the bind() method 
                        // because here we're calling renderWorkoutMarker() method as normal function
                            // it's not called as callback function & we're calling it by ourselves
                        // so that's why here this.renderWorkoutMarker(workout) 
                            // this -> keyword is calling the current object 💡💡💡


                // STEP 6 : render workout on list
                // STEP 7 : hide the form + clear input fields
                inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value  = ''

            }

            renderWorkoutMarker(workout) {
                L.marker(workout.coords).addTo(this.#map).bindPopup(L.pop({
                        maxWidth: 250, 
                        minWidth: 100, 
                        autoClose: false , 
                        closeOnClick: false, 
                        className: `${type}-popup`, 
                    })
                ).setPopupContent(workout.distance).openPopup();
                    // changing the popup content based on the type of the workout
            }
        }

        const app = new App() 
        ```

- `STEP 6` : fixing the type of workout , so that we can display the popup based on it 
    - so we need to get the information whether the current workout is of running or of cycling <br>
        from the workout object
    ```js
    const months = ['January', 'February', 'March', 'April', 
        'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    class Workout {
        date = new Date()
        id = (Date.now() + "").slice(-10) 

        constructor(coords , distance, duration) {
            this.coords = coords // [lat, lng]
            this.distance = distance // in km
            this.duration = duration // in min
        }
    }

    class Running extends Workout {
        type = "running"

        constructor(coords, distance, duration, cadence) {
            super(coords, distance, duration)
            this.cadence = cadence

            this.calcPace()
        }

        calcPace() {
            this.pace = this.duration / this.distance
            return this.pace
        }
    }

    class Cycling extends Workout {
        type = "cycling"

        constructor(coords, distance, duration, elevationGain) {
            super(coords, distance, duration)
            this.elevationGain = elevationGain
            this.calcSpeed()
        }

        calcSpeed() {
            // km/h
            this.speed = this.distance / (this.duration / 60) 
            return this.speed
        }
    }

    // Application architecture
    const form = document.querySelector('.form');
    const containerWorkouts = document.querySelector('.workouts');
    const inputType = document.querySelector('.form__input--type');
    const inputDistance = document.querySelector('.form__input--distance');
    const inputDuration = document.querySelector('.form__input--duration');
    const inputCadence = document.querySelector('.form__input--cadence');
    const inputElevation = document.querySelector('.form__input--elevation');

    class App {
        #map ;
        #mapEvent ;
        #workouts = [] ;

        constructor() {
            this._getPosition() 
            form.addEventListener('submit', this._newWorkout.bind(this))
            inputType.addEventListener('change', this._toggleElevationField)
        }

        _getPosition() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(this._loadMap.bind(this) , function() {
                        alert('Could not get your position')
                    }
                )
            };
        }

        _loadMap(position) {
            const { latitude } = position.coords
            const { longitude } = position.coords
            console.log(`https://www.google.com/maps/@${latitude},${longitude} `) 

            const coords = [latitude, longitude] 
            
            this.#map = L.map('map').setView(coords , 13);
            L.tileLayer(`https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png`, {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(this.#map);

            // handling clicks on the map
            this.#map.on('click', this._showForm.bind(this)) 
        }

        _showForm(mapE) {
            this.#mapEvent = mapE 
            form.classList.remove('hidden')
            inputDistance.focus() 
        }

        _toggleElevationField() {
            inputElevation.closest('.form__row').classList.toggle('.form__row--hidden')
            inputCadence.closest('.form__row').classList.toggle('.form__row--hidden')
        }

        _newWorkout(e) { 
            const validInputs = (...inputs) => inputs.every(inp => Number.isFinite(inp))
            const allPositive = (...inputs) => inputs.every(inp => inp > 0)

            e.preventDefault()

            // STEP 1 : get the data from the form
            const type = inputType.value 
            const distance = +inputDistance.value  
            const duration = +inputDuration.value
            const { lat , lng } = this.#mapEvent.latlng
            const workout ;

            // STEP 3 : if workout is running , create running object
            if (type === 'running') {
                const cadence = +inputCadence.value 
                // STEP 2 : Check if data is valid 
                    // each input fields must contain only number related stuff
                if (!validInputs(distance, duration, cadence) || !all(Positive(distance, duration, cadence))) {  
                    return alert("Inputs have to be positive numbers!") 
                }

                workout = new Running([lat, lng], distance, duration, cadence)
            }
            // STEP 3.1 : if workout is cycling , create cycling object
            if (type === 'cycling') {
                const elevation = +inputElevation.value 
                // STEP 2 : Check if data is valid 
                    // each input fields must contain only number related stuff
                if (!validInputs(distance, duration, elevation) || !all(Positive(distance, duration))) {  
                    return alert("Inputs have to be positive numbers!") 
                }

                workout = new Cycling([lat, lng], distance, duration, elevation)
            }
            // STEP 4 : add new object to workout array
            this.#workout.push(workout) 
            console.log(workout) 

            // STEP 5 : render workout on map as marker
            this.renderWorkoutMarker(workout) 

            // STEP 6 : render workout on list
            // STEP 7 : hide the form + clear input fields
            inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value  = ''

        }

        renderWorkoutMarker(workout) {
            L.marker(workout.coords).addTo(this.#map).bindPopup(L.pop({
                    maxWidth: 250, 
                    minWidth: 100, 
                    autoClose: false , 
                    closeOnClick: false, 
                    className: `${workout.type}-popup`, 
                })
            ).setPopupContent('Workout').openPopup();
                // here we changed from workout.distance into 'Workout'
                    // because we're not getting the string from workout.distance
        }
    }

    const app = new App() 
    ```
    - output : when we click on the map & then the form is created 
        - then select the type of workout as cycling then pass the data & then Enter key <br>
            then we'll get the popup border as yellow which means that popup is cycling workout type
        - if we do with running workout then we'll get the popup of running workout with green border
