const name = 'Paulo';

function writeName() {
    console.log(name);
}

function useWriteName() {
    const name = 'Brendhon';
    writeName();
}

useWriteName();