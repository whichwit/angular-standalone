export interface ISpell {
    rank: number
    level: number
    min: number
    max: number
}

export class PowerWordShield {
    rank: number = 0
    level: number = 0
    min: number = 0
    max: number = 0

    constructor(options = {}) {
        Object.assign(this, options);
    }

    get amount(): number {
        const amount =(this.min + this.max) / 2 
        return Math.round((amount + Number.EPSILON) * 10000) / 10000
    }
}

// export class PowerWordShield extends Spell {
//     constructor(options = {}) { 
//         super(options); // must call super()
//     }
// }