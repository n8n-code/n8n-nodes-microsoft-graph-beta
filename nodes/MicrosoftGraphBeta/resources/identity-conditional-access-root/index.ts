import type { INodeProperties } from 'n8n-workflow';

export const identityConditionalAccessRootDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					]
				}
			},
			"options": [
				{
					"name": "Identity Delete Conditional Access",
					"value": "Identity Delete Conditional Access",
					"action": "Delete navigation property conditionalAccess for identity",
					"description": "Delete navigation property conditionalAccess for identity",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identity/conditionalAccess"
						}
					}
				},
				{
					"name": "Identity Get Conditional Access",
					"value": "Identity Get Conditional Access",
					"action": "Get conditionalAccess from identity",
					"description": "the entry point for the Conditional Access (CA) object model.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identity/conditionalAccess"
						}
					}
				},
				{
					"name": "Identity Update Conditional Access",
					"value": "Identity Update Conditional Access",
					"action": "Update the navigation property conditionalAccess in identity",
					"description": "Update the navigation property conditionalAccess in identity",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identity/conditionalAccess"
						}
					}
				},
				{
					"name": "Identity Conditional Access List Authentication Context Class References",
					"value": "Identity Conditional Access List Authentication Context Class References",
					"action": "List authenticationContextClassReferences",
					"description": "Retrieve a list of authenticationContextClassReference objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identity/conditionalAccess/authenticationContextClassReferences"
						}
					}
				},
				{
					"name": "Identity Conditional Access Create Authentication Context Class References",
					"value": "Identity Conditional Access Create Authentication Context Class References",
					"action": "Create authenticationContextClassReference",
					"description": "Create a new authenticationContextClassReference.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identity/conditionalAccess/authenticationContextClassReferences"
						}
					}
				},
				{
					"name": "Identity Conditional Access Delete Authentication Context Class References",
					"value": "Identity Conditional Access Delete Authentication Context Class References",
					"action": "Delete navigation property authenticationContextClassReferences for identity",
					"description": "Delete navigation property authenticationContextClassReferences for identity",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identity/conditionalAccess/authenticationContextClassReferences/{{$parameter[\"authenticationContextClassReference-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Conditional Access Get Authentication Context Class References",
					"value": "Identity Conditional Access Get Authentication Context Class References",
					"action": "Get authenticationContextClassReferences from identity",
					"description": "Read-only. Nullable. Returns a collection of the specified authentication context class references.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identity/conditionalAccess/authenticationContextClassReferences/{{$parameter[\"authenticationContextClassReference-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Conditional Access Update Authentication Context Class References",
					"value": "Identity Conditional Access Update Authentication Context Class References",
					"action": "Update the navigation property authenticationContextClassReferences in identity",
					"description": "Update the navigation property authenticationContextClassReferences in identity",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identity/conditionalAccess/authenticationContextClassReferences/{{$parameter[\"authenticationContextClassReference-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Conditional Access Delete Authentication Strength",
					"value": "Identity Conditional Access Delete Authentication Strength",
					"action": "Delete navigation property authenticationStrength for identity",
					"description": "Delete navigation property authenticationStrength for identity",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identity/conditionalAccess/authenticationStrength"
						}
					}
				},
				{
					"name": "Identity Conditional Access Get Authentication Strength",
					"value": "Identity Conditional Access Get Authentication Strength",
					"action": "Get authenticationStrength from identity",
					"description": "Get authenticationStrength from identity",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identity/conditionalAccess/authenticationStrength"
						}
					}
				},
				{
					"name": "Identity Conditional Access Update Authentication Strength",
					"value": "Identity Conditional Access Update Authentication Strength",
					"action": "Update the navigation property authenticationStrength in identity",
					"description": "Update the navigation property authenticationStrength in identity",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identity/conditionalAccess/authenticationStrength"
						}
					}
				},
				{
					"name": "Identity Conditional Access Authentication Strength List Authentication Method Modes",
					"value": "Identity Conditional Access Authentication Strength List Authentication Method Modes",
					"action": "List authenticationMethodModes",
					"description": "Get a list of all supported authentication methods, or all supported authentication method combinations as a list of **authenticationMethodModes** objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identity/conditionalAccess/authenticationStrength/authenticationMethodModes"
						}
					}
				},
				{
					"name": "Identity Conditional Access Authentication Strength Create Authentication Method Modes",
					"value": "Identity Conditional Access Authentication Strength Create Authentication Method Modes",
					"action": "Create new navigation property to authenticationMethodModes for identity",
					"description": "Create new navigation property to authenticationMethodModes for identity",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identity/conditionalAccess/authenticationStrength/authenticationMethodModes"
						}
					}
				},
				{
					"name": "Identity Conditional Access Authentication Strength Delete Authentication Method Modes",
					"value": "Identity Conditional Access Authentication Strength Delete Authentication Method Modes",
					"action": "Delete navigation property authenticationMethodModes for identity",
					"description": "Delete navigation property authenticationMethodModes for identity",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identity/conditionalAccess/authenticationStrength/authenticationMethodModes/{{$parameter[\"authenticationMethodModeDetail-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Conditional Access Authentication Strength Get Authentication Method Modes",
					"value": "Identity Conditional Access Authentication Strength Get Authentication Method Modes",
					"action": "Get authenticationMethodModes from identity",
					"description": "Names and descriptions of all valid authentication method modes in the system.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identity/conditionalAccess/authenticationStrength/authenticationMethodModes/{{$parameter[\"authenticationMethodModeDetail-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Conditional Access Authentication Strength Update Authentication Method Modes",
					"value": "Identity Conditional Access Authentication Strength Update Authentication Method Modes",
					"action": "Update the navigation property authenticationMethodModes in identity",
					"description": "Update the navigation property authenticationMethodModes in identity",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identity/conditionalAccess/authenticationStrength/authenticationMethodModes/{{$parameter[\"authenticationMethodModeDetail-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Conditional Access Authentication Strength List Policies",
					"value": "Identity Conditional Access Authentication Strength List Policies",
					"action": "Get policies from identity",
					"description": "A collection of authentication strength policies that exist for this tenant, including both built-in and custom policies.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identity/conditionalAccess/authenticationStrength/policies"
						}
					}
				},
				{
					"name": "Identity Conditional Access Authentication Strength Create Policies",
					"value": "Identity Conditional Access Authentication Strength Create Policies",
					"action": "Create new navigation property to policies for identity",
					"description": "Create new navigation property to policies for identity",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identity/conditionalAccess/authenticationStrength/policies"
						}
					}
				},
				{
					"name": "Identity Conditional Access Authentication Strength Delete Policies",
					"value": "Identity Conditional Access Authentication Strength Delete Policies",
					"action": "Delete navigation property policies for identity",
					"description": "Delete navigation property policies for identity",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identity/conditionalAccess/authenticationStrength/policies/{{$parameter[\"authenticationStrengthPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Conditional Access Authentication Strength Get Policies",
					"value": "Identity Conditional Access Authentication Strength Get Policies",
					"action": "Get policies from identity",
					"description": "A collection of authentication strength policies that exist for this tenant, including both built-in and custom policies.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identity/conditionalAccess/authenticationStrength/policies/{{$parameter[\"authenticationStrengthPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Conditional Access Authentication Strength Update Policies",
					"value": "Identity Conditional Access Authentication Strength Update Policies",
					"action": "Update the navigation property policies in identity",
					"description": "Update the navigation property policies in identity",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identity/conditionalAccess/authenticationStrength/policies/{{$parameter[\"authenticationStrengthPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Conditional Access Authentication Strength Policies List Combination Configurations",
					"value": "Identity Conditional Access Authentication Strength Policies List Combination Configurations",
					"action": "List combinationConfigurations",
					"description": "Get the authenticationCombinationConfiguration objects for an authentication strength policy. authenticationCombinationConfiguration represents requirements placed on specific authentication method combinations that require specified variants of those authentication methods to be used when authenticating. Currently, only fido2combinationConfigurations objects are supported. authenticationCombinationConfiguration objects are supported only for custom authentication strengths.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identity/conditionalAccess/authenticationStrength/policies/{{$parameter[\"authenticationStrengthPolicy-id\"]}}/combinationConfigurations"
						}
					}
				},
				{
					"name": "Identity Conditional Access Authentication Strength Policies Create Combination Configurations",
					"value": "Identity Conditional Access Authentication Strength Policies Create Combination Configurations",
					"action": "Create combinationConfiguration",
					"description": "Create a new authenticationCombinationConfiguration object. In use, only fido2combinationConfigurations may be created, and these may only be created for custom authentication strength policies.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identity/conditionalAccess/authenticationStrength/policies/{{$parameter[\"authenticationStrengthPolicy-id\"]}}/combinationConfigurations"
						}
					}
				},
				{
					"name": "Identity Conditional Access Authentication Strength Policies Delete Combination Configurations",
					"value": "Identity Conditional Access Authentication Strength Policies Delete Combination Configurations",
					"action": "Delete navigation property combinationConfigurations for identity",
					"description": "Delete navigation property combinationConfigurations for identity",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identity/conditionalAccess/authenticationStrength/policies/{{$parameter[\"authenticationStrengthPolicy-id\"]}}/combinationConfigurations/{{$parameter[\"authenticationCombinationConfiguration-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Conditional Access Authentication Strength Policies Get Combination Configurations",
					"value": "Identity Conditional Access Authentication Strength Policies Get Combination Configurations",
					"action": "Get combinationConfigurations from identity",
					"description": "Settings that may be used to require specific types or instances of an authentication method to be used when authenticating with a specified combination of authentication methods.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identity/conditionalAccess/authenticationStrength/policies/{{$parameter[\"authenticationStrengthPolicy-id\"]}}/combinationConfigurations/{{$parameter[\"authenticationCombinationConfiguration-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Conditional Access Authentication Strength Policies Update Combination Configurations",
					"value": "Identity Conditional Access Authentication Strength Policies Update Combination Configurations",
					"action": "Update the navigation property combinationConfigurations in identity",
					"description": "Update the navigation property combinationConfigurations in identity",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identity/conditionalAccess/authenticationStrength/policies/{{$parameter[\"authenticationStrengthPolicy-id\"]}}/combinationConfigurations/{{$parameter[\"authenticationCombinationConfiguration-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Conditional Access List Named Locations",
					"value": "Identity Conditional Access List Named Locations",
					"action": "List namedLocations",
					"description": "Get a list of namedLocation objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identity/conditionalAccess/namedLocations"
						}
					}
				},
				{
					"name": "Identity Conditional Access Create Named Locations",
					"value": "Identity Conditional Access Create Named Locations",
					"action": "Create namedLocation",
					"description": "Create a new namedLocation object. Named locations can be either ipNamedLocation or countryNamedLocation objects.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identity/conditionalAccess/namedLocations"
						}
					}
				},
				{
					"name": "Identity Conditional Access Delete Named Locations",
					"value": "Identity Conditional Access Delete Named Locations",
					"action": "Delete navigation property namedLocations for identity",
					"description": "Delete navigation property namedLocations for identity",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identity/conditionalAccess/namedLocations/{{$parameter[\"namedLocation-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Conditional Access Get Named Locations",
					"value": "Identity Conditional Access Get Named Locations",
					"action": "Get namedLocations from identity",
					"description": "Read-only. Nullable. Returns a collection of the specified named locations.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identity/conditionalAccess/namedLocations/{{$parameter[\"namedLocation-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Conditional Access Update Named Locations",
					"value": "Identity Conditional Access Update Named Locations",
					"action": "Update the navigation property namedLocations in identity",
					"description": "Update the navigation property namedLocations in identity",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identity/conditionalAccess/namedLocations/{{$parameter[\"namedLocation-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Conditional Access List Policies",
					"value": "Identity Conditional Access List Policies",
					"action": "List policies",
					"description": "Retrieve a list of conditionalAccessPolicy objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identity/conditionalAccess/policies"
						}
					}
				},
				{
					"name": "Identity Conditional Access Create Policies",
					"value": "Identity Conditional Access Create Policies",
					"action": "Create conditionalAccessPolicy",
					"description": "Create a new conditionalAccessPolicy.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identity/conditionalAccess/policies"
						}
					}
				},
				{
					"name": "Identity Conditional Access Delete Policies",
					"value": "Identity Conditional Access Delete Policies",
					"action": "Delete navigation property policies for identity",
					"description": "Delete navigation property policies for identity",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identity/conditionalAccess/policies/{{$parameter[\"conditionalAccessPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Conditional Access Get Policies",
					"value": "Identity Conditional Access Get Policies",
					"action": "Get policies from identity",
					"description": "Read-only. Nullable. Returns a collection of the specified Conditional Access policies.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identity/conditionalAccess/policies/{{$parameter[\"conditionalAccessPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Conditional Access Update Policies",
					"value": "Identity Conditional Access Update Policies",
					"action": "Update the navigation property policies in identity",
					"description": "Update the navigation property policies in identity",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identity/conditionalAccess/policies/{{$parameter[\"conditionalAccessPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Conditional Access List Templates",
					"value": "Identity Conditional Access List Templates",
					"action": "List conditionalAccessTemplates",
					"description": "Get a list of the conditionalAccessTemplate objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identity/conditionalAccess/templates"
						}
					}
				},
				{
					"name": "Identity Conditional Access Get Templates",
					"value": "Identity Conditional Access Get Templates",
					"action": "Get templates from identity",
					"description": "Read-only. Nullable. Returns a collection of the specified Conditional Access templates.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identity/conditionalAccess/templates/{{$parameter[\"conditionalAccessTemplate-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /identity/conditionalAccess",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Delete Conditional Access"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Delete Conditional Access"
					]
				}
			}
		},
		{
			"displayName": "GET /identity/conditionalAccess",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Get Conditional Access"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Get Conditional Access"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Get Conditional Access"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identity/conditionalAccess",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Update Conditional Access"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identity/conditionalAccess<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Update Conditional Access"
					]
				}
			}
		},
		{
			"displayName": "GET /identity/conditionalAccess/authenticationContextClassReferences",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access List Authentication Context Class References"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access List Authentication Context Class References"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access List Authentication Context Class References"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access List Authentication Context Class References"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access List Authentication Context Class References"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access List Authentication Context Class References"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access List Authentication Context Class References"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access List Authentication Context Class References"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access List Authentication Context Class References"
					]
				}
			}
		},
		{
			"displayName": "POST /identity/conditionalAccess/authenticationContextClassReferences",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Create Authentication Context Class References"
					]
				}
			}
		},
		{
			"displayName": "POST /identity/conditionalAccess/authenticationContextClassReferences<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Create Authentication Context Class References"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identity/conditionalAccess/authenticationContextClassReferences/{authenticationContextClassReference-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Delete Authentication Context Class References"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Delete Authentication Context Class References"
					]
				}
			}
		},
		{
			"displayName": "GET /identity/conditionalAccess/authenticationContextClassReferences/{authenticationContextClassReference-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Get Authentication Context Class References"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Get Authentication Context Class References"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Get Authentication Context Class References"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identity/conditionalAccess/authenticationContextClassReferences/{authenticationContextClassReference-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Update Authentication Context Class References"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identity/conditionalAccess/authenticationContextClassReferences/{authenticationContextClassReference-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Update Authentication Context Class References"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identity/conditionalAccess/authenticationStrength",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Delete Authentication Strength"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Delete Authentication Strength"
					]
				}
			}
		},
		{
			"displayName": "GET /identity/conditionalAccess/authenticationStrength",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Get Authentication Strength"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Get Authentication Strength"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Get Authentication Strength"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identity/conditionalAccess/authenticationStrength",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Update Authentication Strength"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identity/conditionalAccess/authenticationStrength<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Update Authentication Strength"
					]
				}
			}
		},
		{
			"displayName": "GET /identity/conditionalAccess/authenticationStrength/authenticationMethodModes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Authentication Strength List Authentication Method Modes"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Authentication Strength List Authentication Method Modes"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Authentication Strength List Authentication Method Modes"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Authentication Strength List Authentication Method Modes"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Authentication Strength List Authentication Method Modes"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Authentication Strength List Authentication Method Modes"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Authentication Strength List Authentication Method Modes"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Authentication Strength List Authentication Method Modes"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Authentication Strength List Authentication Method Modes"
					]
				}
			}
		},
		{
			"displayName": "POST /identity/conditionalAccess/authenticationStrength/authenticationMethodModes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Authentication Strength Create Authentication Method Modes"
					]
				}
			}
		},
		{
			"displayName": "POST /identity/conditionalAccess/authenticationStrength/authenticationMethodModes<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Authentication Strength Create Authentication Method Modes"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identity/conditionalAccess/authenticationStrength/authenticationMethodModes/{authenticationMethodModeDetail-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Authentication Strength Delete Authentication Method Modes"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Authentication Strength Delete Authentication Method Modes"
					]
				}
			}
		},
		{
			"displayName": "GET /identity/conditionalAccess/authenticationStrength/authenticationMethodModes/{authenticationMethodModeDetail-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Authentication Strength Get Authentication Method Modes"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Authentication Strength Get Authentication Method Modes"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Authentication Strength Get Authentication Method Modes"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identity/conditionalAccess/authenticationStrength/authenticationMethodModes/{authenticationMethodModeDetail-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Authentication Strength Update Authentication Method Modes"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identity/conditionalAccess/authenticationStrength/authenticationMethodModes/{authenticationMethodModeDetail-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Authentication Strength Update Authentication Method Modes"
					]
				}
			}
		},
		{
			"displayName": "GET /identity/conditionalAccess/authenticationStrength/policies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Authentication Strength List Policies"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Authentication Strength List Policies"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Authentication Strength List Policies"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Authentication Strength List Policies"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Authentication Strength List Policies"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Authentication Strength List Policies"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Authentication Strength List Policies"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Authentication Strength List Policies"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Authentication Strength List Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /identity/conditionalAccess/authenticationStrength/policies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Authentication Strength Create Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /identity/conditionalAccess/authenticationStrength/policies<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Authentication Strength Create Policies"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Authentication Strength Delete Policies"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Authentication Strength Delete Policies"
					]
				}
			}
		},
		{
			"displayName": "GET /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Authentication Strength Get Policies"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Authentication Strength Get Policies"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Authentication Strength Get Policies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Authentication Strength Update Policies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Authentication Strength Update Policies"
					]
				}
			}
		},
		{
			"displayName": "GET /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/combinationConfigurations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Authentication Strength Policies List Combination Configurations"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Authentication Strength Policies List Combination Configurations"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Authentication Strength Policies List Combination Configurations"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Authentication Strength Policies List Combination Configurations"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Authentication Strength Policies List Combination Configurations"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Authentication Strength Policies List Combination Configurations"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Authentication Strength Policies List Combination Configurations"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Authentication Strength Policies List Combination Configurations"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Authentication Strength Policies List Combination Configurations"
					]
				}
			}
		},
		{
			"displayName": "POST /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/combinationConfigurations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Authentication Strength Policies Create Combination Configurations"
					]
				}
			}
		},
		{
			"displayName": "POST /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/combinationConfigurations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Authentication Strength Policies Create Combination Configurations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Authentication Strength Policies Delete Combination Configurations"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Authentication Strength Policies Delete Combination Configurations"
					]
				}
			}
		},
		{
			"displayName": "GET /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Authentication Strength Policies Get Combination Configurations"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Authentication Strength Policies Get Combination Configurations"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Authentication Strength Policies Get Combination Configurations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Authentication Strength Policies Update Combination Configurations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Authentication Strength Policies Update Combination Configurations"
					]
				}
			}
		},
		{
			"displayName": "GET /identity/conditionalAccess/namedLocations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access List Named Locations"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access List Named Locations"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access List Named Locations"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access List Named Locations"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access List Named Locations"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access List Named Locations"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access List Named Locations"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access List Named Locations"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access List Named Locations"
					]
				}
			}
		},
		{
			"displayName": "POST /identity/conditionalAccess/namedLocations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Create Named Locations"
					]
				}
			}
		},
		{
			"displayName": "POST /identity/conditionalAccess/namedLocations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Create Named Locations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identity/conditionalAccess/namedLocations/{namedLocation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Delete Named Locations"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Delete Named Locations"
					]
				}
			}
		},
		{
			"displayName": "GET /identity/conditionalAccess/namedLocations/{namedLocation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Get Named Locations"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Get Named Locations"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Get Named Locations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identity/conditionalAccess/namedLocations/{namedLocation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Update Named Locations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identity/conditionalAccess/namedLocations/{namedLocation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Update Named Locations"
					]
				}
			}
		},
		{
			"displayName": "GET /identity/conditionalAccess/policies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access List Policies"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access List Policies"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access List Policies"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access List Policies"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access List Policies"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access List Policies"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access List Policies"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access List Policies"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access List Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /identity/conditionalAccess/policies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Create Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /identity/conditionalAccess/policies<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Create Policies"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identity/conditionalAccess/policies/{conditionalAccessPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Delete Policies"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Delete Policies"
					]
				}
			}
		},
		{
			"displayName": "GET /identity/conditionalAccess/policies/{conditionalAccessPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Get Policies"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Get Policies"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Get Policies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identity/conditionalAccess/policies/{conditionalAccessPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Update Policies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identity/conditionalAccess/policies/{conditionalAccessPolicy-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Update Policies"
					]
				}
			}
		},
		{
			"displayName": "GET /identity/conditionalAccess/templates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access List Templates"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access List Templates"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access List Templates"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access List Templates"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access List Templates"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access List Templates"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access List Templates"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access List Templates"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access List Templates"
					]
				}
			}
		},
		{
			"displayName": "GET /identity/conditionalAccess/templates/{conditionalAccessTemplate-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Get Templates"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Get Templates"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Conditional Access Root"
					],
					"operation": [
						"Identity Conditional Access Get Templates"
					]
				}
			}
		},
];
