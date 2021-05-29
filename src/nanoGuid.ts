import { nanoid } from "nanoid";
import { StringWrapper } from "./primitiveWrappers";
import { FQN } from "./fqn";

/**
 * ## Guid
 *
 * Represents a guid string. Values are generated by uuid package.
 */
@FQN("@tokilabs/lang.nanoGuid")
export class NanoGuid extends StringWrapper {
	private value: string;

	protected get primitiveValue(): string {
		return this.value;
	}

	/**
	 * Creates an instance of Guid.
	 *
	 * If a guid is passed as a parameter it will be validated,
	 * otherwise a new guid value will be generated.
	 *
	 * @param {string} [nanoGuid]
	 * @memberof NanoGuid
	 */
	constructor(nanoGuid?: string) {
		if (nanoGuid) {
			if (!NanoGuid.isValidGuid(nanoGuid))
				throw new Error("Invalid nanoGuid value supplied");
		} else {
			nanoGuid = nanoid();
		}

		super(nanoGuid);
		this.value = nanoGuid;
	}

	public static isValidGuid(guid: string): boolean {
		return /[0-9a-zA-Z-_]{21}/.test(guid);
	}
}
