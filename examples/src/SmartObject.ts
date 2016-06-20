/**
 * Created by chung on 5/27/16.
 */
class SmartObject implements Disposable, Activatable {
    

    
}
function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
applyMixins(SmartObject, [Disposable, Activatable]);
