# Refactoring for Project Architecture

- inside Mapty-architecture-part-1.png , we'll build the class `App`

## Steps - implementing the class App

- `STEP 1` : creating structure what we need inside class App
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

    let map , mapEvent ;

    class App {
        constructor() {}

        _getPosition() {}

        _loadMap() {}

        _showForm() {}

        _toggleElevationField() {}

        _newWorkout() {}
    }

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                const { latitude } = position.coords
                const { longitude } = position.coords
                console.log(`https://www.google.com/maps/@${latitude},${longitude} `) 

                const coords = [latitude, longitude] 
                map = L.map('map').setView(coords , 13);
                L.tileLayer(`https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png`, {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }).addTo(map);

                // handling clicks on the map
                map.on('click', function(mapE) { 
                    mapEvent = mapE 

                    form.classList.remove('hidden')
                    inputDistance.focus() 
                })

            } , function() {
                alert('Could not get your position')
            }
        )
    };

    form.addEventListener('submit', function(e) {
        e.preventDefault()

        // clear input fields by-default 
        inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value  = ''

        // display maker
        const { lat , lng } = mapEvent.latlng

        L.marker([lat , lng]).addTo(map).bindPopup(L.pop({
                maxWidth: 250, 
                minWidth: 100, 
                autoClose: false , 
                closeOnClick: false, 
                className: 'running-popup', 
            })
        ).setPopupContent("Workout").openPopup();
    })

    // change -> event used when we're dealing with selection to choose one of them
    inputType.addEventListener('change', function() {
        // Best practice ✅ : write JS based on what we need & see the HTML file according to need 💡💡💡
        
        inputElevation.closest('.form__row').classList.toggle('.form__row--hidden')
        inputCadence.closest('.form__row').classList.toggle('.form__row--hidden')
    })
    ```

- `STEP 2` : getting the user's current position
    ```js
    // put the code before these from STEP 1

    let map , mapEvent ;

    class App {
        constructor() {}

        _getPosition() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(this._loadMap , function() {
                        // JS will call this callback function -> this._loadMap
                            // & pass in the position argument of _loadMap() as soon as the current position 
                            // of the user is determined , so the event is 'Receive Position' inside 
                            // the Mapty-architecture-part-1.png 💡💡💡

                        alert('Could not get your position')
                    }
                )
            };
        }

        _loadMap(position) {
            // this code is related to load the map that's why we putted inside _loadMap() method
                // & we didn't used the function -> keyword because we'll call the _loadMap() method ✔️✔️✔️
            const { latitude } = position.coords
            const { longitude } = position.coords
            console.log(`https://www.google.com/maps/@${latitude},${longitude} `) 

            const coords = [latitude, longitude] 
            map = L.map('map').setView(coords , 13);
            L.tileLayer(`https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png`, {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            // handling clicks on the map
            map.on('click', function(mapE) { 
                mapEvent = mapE 

                form..classList.remove('hidden')
                inputDistance.focus() 
            })
        }

        _showForm() {}

        _toggleElevationField() {}

        _newWorkout() {}
    }


    form.addEventListener('submit', function(e) {
        e.preventDefault()

        inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value  = ''

        // display maker
        const { lat , lng } = mapEvent.latlng
        L.marker([lat , lng]).addTo(map).bindPopup(L.pop({
                maxWidth: 250, 
                minWidth: 100, 
                autoClose: false , 
                closeOnClick: false, 
                className: 'running-popup', 
            })
        ).setPopupContent("Workout").openPopup();
    })

    inputType.addEventListener('change', function() {        
        inputElevation.closest('.form__row').classList.toggle('.form__row--hidden')
        inputCadence.closest('.form__row').classList.toggle('.form__row--hidden')
    })
    ```
    - output : nothing is happening because right now , none of those code will do anything to our application 
        - because we need to create an actual object out of that App class
    - `STEP 2.1` : creating an object out of that App class
        ```js
        // put the code before these from STEP 1

        let map , mapEvent ;

        class App {
            constructor() {}

            _getPosition() {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(this._loadMap , function() {
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
                map = L.map('map').setView(coords , 13);
                L.tileLayer(`https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png`, {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }).addTo(map);

                // handling clicks on the map
                map.on('click', function(mapE) { 
                    mapEvent = mapE 

                    form.classList.remove('hidden')
                    inputDistance.focus() 
                })
            }

            _showForm() {}

            _toggleElevationField() {}

            _newWorkout() {}
        }

        const app = new App() 
            // it doesn't need any arguments because the constructor() (of App class) doesn't have any parameters
            // because we don't any any inputs for our application right now 
            // Eg : we could use for inputs in an application like this would be an object of options 
                // which is pretty common in third party libraries 💡💡💡
                // so if we were building a library for some other people to use then we could allow 
                    // these developers to customize the library using some options

        form.addEventListener('submit', function(e) {
            e.preventDefault()

            inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value  = ''

            // display maker
            const { lat , lng } = mapEvent.latlng
            L.marker([lat , lng]).addTo(map).bindPopup(L.pop({
                    maxWidth: 250, 
                    minWidth: 100, 
                    autoClose: false , 
                    closeOnClick: false, 
                    className: 'running-popup', 
                })
            ).setPopupContent("Workout").openPopup();
        })

        inputType.addEventListener('change', function() {        
            inputElevation.closest('.form__row').classList.toggle('.form__row--hidden')
            inputCadence.closest('.form__row').classList.toggle('.form__row--hidden')
        })
        ```
    - `STEP 2.2` : now in order to trigger the geolocation API 
        - then we need to call _getPosition() method on that object which is created
        ```js
        // put the code before these from STEP 1

        let map , mapEvent ;

        class App {
            constructor() {}

            _getPosition() {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(this._loadMap , function() {
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
                map = L.map('map').setView(coords , 13);
                L.tileLayer(`https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png`, {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }).addTo(map);

                // handling clicks on the map
                map.on('click', function(mapE) { 
                    mapEvent = mapE 

                    form..classList.remove('hidden')
                    inputDistance.focus() 
                })
            }

            _showForm() {}

            _toggleElevationField() {}

            _newWorkout() {}
        }

        const app = new App() 
        app._getPosition() // this line code will be executed when the application loads
            // because we know that , this line code is in the top level scope
            // so this code will get executed immediately as the scripts loads
            // but why we're calling _getPosition() here , if we could do this inside the class
                // & that will be lot cleaner 💡💡💡
            // so inside of the App class , we also have a method that gets executed 
                // as soon as that app -> object is created i.e the constructor function
                // so the constructor() function of App class , will be called immediately
                    // when a new object is created from this class & this object which is created i.e app
                    // will be created when the page loads & due to this the constructor() is also executed
                    // immediately as the page loads 💡💡💡
                // so we can simply call that _getPosition() inside the constructor() function 
                    // instead calling it via that object outside the App class 💡💡💡  

        form.addEventListener('submit', function(e) {
            e.preventDefault()

            inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value  = ''

            // display maker
            const { lat , lng } = mapEvent.latlng
            L.marker([lat , lng]).addTo(map).bindPopup(L.pop({
                    maxWidth: 250, 
                    minWidth: 100, 
                    autoClose: false , 
                    closeOnClick: false, 
                    className: 'running-popup', 
                })
            ).setPopupContent("Workout").openPopup();
        })

        inputType.addEventListener('change', function() {        
            inputElevation.closest('.form__row').classList.toggle('.form__row--hidden')
            inputCadence.closest('.form__row').classList.toggle('.form__row--hidden')
        })
        ```
    - `STEP 2.3` : calling _getPosition() method inside the constructor() function of App class
        ```js
        // put the code before these from STEP 1

        let map , mapEvent ;

        class App {
            constructor() {
                this._getPosition() // this -> means current object
                    // so even inside the flow chart , we can see load page -> will trigger the constructor()
                        // which will then trigger _getPosition()
                        // & as soon as we receive the position then the _loadMap is called with the position
            }

            _getPosition() {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(this._loadMap , function() {
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
                map = L.map('map').setView(coords , 13);
                L.tileLayer(`https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png`, {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }).addTo(map);

                // handling clicks on the map
                map.on('click', function(mapE) { 
                    mapEvent = mapE 

                    form.classList.remove('hidden')
                    inputDistance.focus() 
                })
            }

            _showForm() {}

            _toggleElevationField() {}

            _newWorkout() {}
        }

        const app = new App() 

        form.addEventListener('submit', function(e) {
            e.preventDefault()

            inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value  = ''

            // display maker
            const { lat , lng } = mapEvent.latlng
            L.marker([lat , lng]).addTo(map).bindPopup(L.pop({
                    maxWidth: 250, 
                    minWidth: 100, 
                    autoClose: false , 
                    closeOnClick: false, 
                    className: 'running-popup', 
                })
            ).setPopupContent("Workout").openPopup();
        })

        inputType.addEventListener('change', function() {        
            inputElevation.closest('.form__row').classList.toggle('.form__row--hidden')
            inputCadence.closest('.form__row').classList.toggle('.form__row--hidden')
        })
        ```
        - now we can see that we have map , mapEvent variables as global <br>
            so we can define them inside the App class , as the private properties 

- `STEP 3` : making those map , mapEvent variables as private properties inside the App class
    ```js
    // put the code before these from STEP 1

    let map , mapEvent ;

    class App {
        #map ;
        #mapEvent ;

        constructor() {
            this._getPosition() 
        }

        _getPosition() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(this._loadMap , function() {
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
                // we're calling #map private properties because #map , etc private properties
                    // will be defined on the object itself

            L.tileLayer(`https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png`, {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(this.#map);

            // handling clicks on the map
            this.#map.on('click', function(mapE) { 
                this.#mapEvent = mapE 

                form.classList.remove('hidden')
                inputDistance.focus() 
            })
        }

        _showForm() {}

        _toggleElevationField() {}

        _newWorkout() {}
    }

    const app = new App() 

    form.addEventListener('submit', function(e) {
        e.preventDefault()

        inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value  = ''

        // display maker
        const { lat , lng } = mapEvent.latlng
        L.marker([lat , lng]).addTo(map).bindPopup(L.pop({
                maxWidth: 250, 
                minWidth: 100, 
                autoClose: false , 
                closeOnClick: false, 
                className: 'running-popup', 
            })
        ).setPopupContent("Workout").openPopup();
    })

    inputType.addEventListener('change', function() {        
        inputElevation.closest('.form__row').classList.toggle('.form__row--hidden')
        inputCadence.closest('.form__row').classList.toggle('.form__row--hidden')
    })
    ```
    - output : after reloading the page then we'll get the error
        - i.e can't set #map of undefined
    - `STEP 3.1` : fixing the error 
        ```js
        // put the code before these from STEP 1

        let map , mapEvent ;

        class App {
            #map ;
            #mapEvent ;

            constructor() {
                this._getPosition() 
            }

            _getPosition() {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(this._loadMap , function() {
                            // here we're not calling this._loadMap , so this._loadMap will be 
                                // called by getCurrentPosition() method
                            // Note ✅ : this._loadMap -> will be treated as a regular function call , 
                                // not as a method call 💡💡💡
                            // so in regular function call , this -> keyword is set to undefined
                                // that's why inside the _loadMap() function , this -> keyword is undefined
                            // but we have a solution i.e to manually bind that this -> keyword 
                                // to whatever we need 💡💡💡

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

                console.log(this) // checking output : we'll get undefined
                this.#map = L.map('map').setView(coords , 13);
                L.tileLayer(`https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png`, {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }).addTo(this.#map);

                // handling clicks on the map
                this.#map.on('click', function(mapE) { 
                    this.#mapEvent = mapE 
                    form.classList.remove('hidden')
                    inputDistance.focus() 
                })
            }

            _showForm() {}

            _toggleElevationField() {}

            _newWorkout() {}
        }

        const app = new App() 

        form.addEventListener('submit', function(e) {
            e.preventDefault()

            inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value  = ''

            // display maker
            const { lat , lng } = mapEvent.latlng
            L.marker([lat , lng]).addTo(map).bindPopup(L.pop({
                    maxWidth: 250, 
                    minWidth: 100, 
                    autoClose: false , 
                    closeOnClick: false, 
                    className: 'running-popup', 
                })
            ).setPopupContent("Workout").openPopup();
        })

        inputType.addEventListener('change', function() {        
            inputElevation.closest('.form__row').classList.toggle('.form__row--hidden')
            inputCadence.closest('.form__row').classList.toggle('.form__row--hidden')
        })
        ```
    - `STEP 3.2` : using bind() method on that this._loadMap
        ```js
        // put the code before these from STEP 1

        let map , mapEvent ;

        class App {
            #map ;
            #mapEvent ;

            constructor() {
                this._getPosition() 
            }

            _getPosition() {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(this._loadMap.bind(this) , function() {
                            // bind() method returns a new function 💡💡💡

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

                console.log(this) // output : when reload the page , then we'll get the this -> keyword
                    // & inside the App object , #map -> contains stuff related to leaftlet library

                this.#map = L.map('map').setView(coords , 13);
                L.tileLayer(`https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png`, {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }).addTo(this.#map);

                // handling clicks on the map
                this.#map.on('click', function(mapE) { 
                    this.#mapEvent = mapE 
                    form.classList.remove('hidden')
                    inputDistance.focus() 
                })
            }

            _showForm() {}

            _toggleElevationField() {}

            _newWorkout() {}
        }

        const app = new App() 

        form.addEventListener('submit', function(e) {
            e.preventDefault()

            inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value  = ''

            // display maker
            const { lat , lng } = mapEvent.latlng
            L.marker([lat , lng]).addTo(map).bindPopup(L.pop({
                    maxWidth: 250, 
                    minWidth: 100, 
                    autoClose: false , 
                    closeOnClick: false, 
                    className: 'running-popup', 
                })
            ).setPopupContent("Workout").openPopup();
        })

        inputType.addEventListener('change', function() {        
            inputElevation.closest('.form__row').classList.toggle('.form__row--hidden')
            inputCadence.closest('.form__row').classList.toggle('.form__row--hidden')
        })
        ```

- `STEP 4` : refactoring the code 
    - `1` : form.addEventListener() for submitting the form
    - `2` : toggling the inputs type field
    - so inside the flow chart , we're taking about these events i.e `click on map` , `change input` <br>
        so where do you think that these event listeners should be located <br>
        if you think that those should be outside of the App class but it doesn't make a lot of sense
    - so we're gonna attach those event listeners inside the constructor() function of App class <br>
        because whenever the object is created then automatically the constructor() function will be executed 💡💡💡
    - `STEP 4.1` : putting those event listeners code inside the constructor
        ```js
        // put the code before these from STEP 1

        let map , mapEvent ;

        class App {
            #map ;
            #mapEvent ;

            constructor() {
                this._getPosition() 

                form.addEventListener('submit', function(e) {
                    e.preventDefault()

                    inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value  = ''

                    // display maker
                    const { lat , lng } = mapEvent.latlng
                    L.marker([lat , lng]).addTo(map).bindPopup(L.pop({
                            maxWidth: 250, 
                            minWidth: 100, 
                            autoClose: false , 
                            closeOnClick: false, 
                            className: 'running-popup', 
                        })
                    ).setPopupContent("Workout").openPopup();
                })

                inputType.addEventListener('change', function() {        
                    inputElevation.closest('.form__row').classList.toggle('.form__row--hidden')
                    inputCadence.closest('.form__row').classList.toggle('.form__row--hidden')
                })
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
                this.#map.on('click', function(mapE) { 
                    this.#mapEvent = mapE 
                    form.classList.remove('hidden')
                    inputDistance.focus() 
                })
            }

            _showForm() {}

            _toggleElevationField() {}

            _newWorkout() {}
        }

        const app = new App() 
        ```
    - `STEP 4.2` : now let's refactor the code of the constructor() function
        ```js
        // put the code before these from STEP 1

        let map , mapEvent ;

        class App {
            #map ;
            #mapEvent ;

            constructor() {
                this._getPosition() 

                form.addEventListener('submit', this._newWorkout)
                    // what you think what'll be the this -> keyword is on this method _newWorkout
                        // because _newWorkout is a event handler function , so the event handler function
                        // will always have the this -> keyword of that element onto which it's attached 💡💡💡
                            // in this case i.e form -> element
                        // so inside the _newWorkout method , this -> keyword will point to form element
                            // no longer to the App object 💡💡💡
                        // so we need to fix it via bind() method

                inputType.addEventListener('change', function() {        
                    inputElevation.closest('.form__row').classList.toggle('.form__row--hidden')
                    inputCadence.closest('.form__row').classList.toggle('.form__row--hidden')
                })
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
                this.#map.on('click', function(mapE) { 
                    this.#mapEvent = mapE 
                    form.classList.remove('hidden')
                    inputDistance.focus() 
                })
            }

            _showForm() {}

            _toggleElevationField() {}

            _newWorkout(e) { // here we putted the code of form.addEventListener() method
                // because after submitting the form for the new workout

                e.preventDefault()
                console.log(this) // output : after refresh the code , we'll get an error

                inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value  = ''

                // display maker
                const { lat , lng } = mapEvent.latlng
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
    - `STEP 4.3` : fixing this -> keyword by using bind() method 
        - on this line of code `form.addEventListener('submit', this._newWorkout)`
        ```js
        // put the code before these from STEP 1

        let map , mapEvent ;

        class App {
            #map ;
            #mapEvent ;

            constructor() {
                this._getPosition() 

                form.addEventListener('submit', this._newWorkout.bind(this))
                    // so this is the real pain point of working with event handlers in classes
                    // so even when you're working in the real world & you have event listeners inside of a class
                        // you'll be binding the this -> keyword all the time 💡💡💡
                        // because otherwise many parts of your code are not gonna work
                    // inside this line of code -> this._newWorkout.bind(this)
                        // in this _newWorkout method called the this -> keyword 
                        // & that this -> keyword will simply point to the form element
                        // but that's not we want because in most of these methods , 
                            // we want this -> keyword to still point to the object itself i.e app object 💡💡💡
                            // so that's why we used bind() method , & inside it , we passed this -> keyword
                            // which will point to the current object 💡💡💡

                inputType.addEventListener('change', function() {        
                    inputElevation.closest('.form__row').classList.toggle('.form__row--hidden')
                    inputCadence.closest('.form__row').classList.toggle('.form__row--hidden')
                })
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
                this.#map.on('click', function(mapE) { 
                    this.#mapEvent = mapE 
                    form.classList.remove('hidden')
                    inputDistance.focus() 
                })
            }

            _showForm() {}

            _toggleElevationField() {}

            _newWorkout(e) { 
                e.preventDefault()

                inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value  = ''

                // display maker
                const { lat , lng } = mapEvent.latlng
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
    - `STEP 4.4` : showing form
        ```js
        // put the code before these from STEP 1

        let map , mapEvent ;

        class App {
            #map ;
            #mapEvent ;

            constructor() {
                this._getPosition() 

                form.addEventListener('submit', this._newWorkout.bind(this))

                inputType.addEventListener('change', function() {        
                    inputElevation.closest('.form__row').classList.toggle('.form__row--hidden')
                    inputCadence.closest('.form__row').classList.toggle('.form__row--hidden')
                })
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
                    // if we do this this._showForm then we'll get same error that's why we used bind() method 💡💡💡 
                        // so that this -> keyword will point to the current object instead of the this.#map 💡💡💡
            }

            _showForm(mapE) {
                this.#mapEvent = mapE 
                form.classList.remove('hidden')
                inputDistance.focus() 
            }

            _toggleElevationField() {}

            _newWorkout(e) { 
                e.preventDefault()

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
        - output : when we click on the map then form will be created
            - & if you're getting the error after refactoring then that's normal & no need to panic
            - & after filling the form then popup with it's marker will be created
    - `STEP 4.5` : working on toggle b/w different types of workout
        ```js
        // put the code before these from STEP 1

        // let map , mapEvent ; -> we don't need this variables

        class App {
            #map ;
            #mapEvent ;

            constructor() {
                this._getPosition() 

                form.addEventListener('submit', this._newWorkout.bind(this))

                inputType.addEventListener('change', this._toggleElevationField)
                    // here we didn't used the bind() method because 
                        // inside _toggleElevationField() method there's no this -> keyword
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
        - output : when we click on the map , then after when the form is generated 
            - then that toggle input type workout is working correctly

- in next lecture , we'll implement the rest the of the architecture i.e those three classes
