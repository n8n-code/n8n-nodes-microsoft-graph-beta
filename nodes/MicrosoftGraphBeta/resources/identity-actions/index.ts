import type { INodeProperties } from 'n8n-workflow';

export const identityActionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Actions"
					]
				}
			},
			"options": [
				{
					"name": "Identity Api Connectors Identity Api Connector Upload Client Certificate",
					"value": "Identity Api Connectors Identity Api Connector Upload Client Certificate",
					"action": "Invoke action uploadClientCertificate",
					"description": "Upload a PKCS 12 format key (.pfx) to an API connector's authentication configuration. The input is a base-64 encoded value of the PKCS 12 certificate contents. This method returns an apiConnector.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identity/apiConnectors/{{$parameter[\"identityApiConnector-id\"]}}/microsoft.graph.uploadClientCertificate"
						}
					}
				},
				{
					"name": "Identity B 2 C User Flows B 2 C Identity User Flow User Attribute Assignments Set Order",
					"value": "Identity B 2 C User Flows B 2 C Identity User Flow User Attribute Assignments Set Order",
					"action": "Invoke action setOrder",
					"description": "Set the order of identityUserFlowAttributeAssignments being collected within a user flow.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identity/b2cUserFlows/{{$parameter[\"b2cIdentityUserFlow-id\"]}}/userAttributeAssignments/microsoft.graph.setOrder"
						}
					}
				},
				{
					"name": "Identity B 2 X User Flows B 2 X Identity User Flow User Attribute Assignments Set Order",
					"value": "Identity B 2 X User Flows B 2 X Identity User Flow User Attribute Assignments Set Order",
					"action": "Invoke action setOrder",
					"description": "Set the order of identityUserFlowAttributeAssignments being collected within a user flow.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identity/b2xUserFlows/{{$parameter[\"b2xIdentityUserFlow-id\"]}}/userAttributeAssignments/microsoft.graph.setOrder"
						}
					}
				},
				{
					"name": "Identity Conditional Access Authentication Strength Policies Authentication Strength Policy Update Allowed Combinations",
					"value": "Identity Conditional Access Authentication Strength Policies Authentication Strength Policy Update Allowed Combinations",
					"action": "Invoke action updateAllowedCombinations",
					"description": "Update the allowedCombinations property of an authenticationStrengthPolicy object. To update other properties of an authenticationStrengthPolicy object, use the Update authenticationStrengthPolicy method.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identity/conditionalAccess/authenticationStrength/policies/{{$parameter[\"authenticationStrengthPolicy-id\"]}}/microsoft.graph.updateAllowedCombinations"
						}
					}
				},
				{
					"name": "Identity Custom Authentication Extensions Validate Authentication Configuration",
					"value": "Identity Custom Authentication Extensions Validate Authentication Configuration",
					"action": "Invoke action validateAuthenticationConfiguration",
					"description": "Invoke action validateAuthenticationConfiguration",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identity/customAuthenticationExtensions/microsoft.graph.validateAuthenticationConfiguration"
						}
					}
				},
				{
					"name": "Identity Custom Authentication Extensions Custom Authentication Extension Validate Authentication Configuration",
					"value": "Identity Custom Authentication Extensions Custom Authentication Extension Validate Authentication Configuration",
					"action": "Invoke action validateAuthenticationConfiguration",
					"description": "Invoke action validateAuthenticationConfiguration",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identity/customAuthenticationExtensions/{{$parameter[\"customAuthenticationExtension-id\"]}}/microsoft.graph.validateAuthenticationConfiguration"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /identity/apiConnectors/{identityApiConnector-id}/microsoft.graph.uploadClientCertificate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Actions"
					],
					"operation": [
						"Identity Api Connectors Identity Api Connector Upload Client Certificate"
					]
				}
			}
		},
		{
			"displayName": "Password",
			"name": "password",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "password",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Actions"
					],
					"operation": [
						"Identity Api Connectors Identity Api Connector Upload Client Certificate"
					]
				}
			}
		},
		{
			"displayName": "Pkcs 12 Value",
			"name": "pkcs12Value",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "pkcs12Value",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Actions"
					],
					"operation": [
						"Identity Api Connectors Identity Api Connector Upload Client Certificate"
					]
				}
			}
		},
		{
			"displayName": "POST /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/userAttributeAssignments/microsoft.graph.setOrder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Actions"
					],
					"operation": [
						"Identity B 2 C User Flows B 2 C Identity User Flow User Attribute Assignments Set Order"
					]
				}
			}
		},
		{
			"displayName": "New Assignment Order",
			"name": "newAssignmentOrder",
			"type": "json",
			"default": "{\n  \"order\": [\n    null\n  ]\n}",
			"routing": {
				"send": {
					"property": "newAssignmentOrder",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Actions"
					],
					"operation": [
						"Identity B 2 C User Flows B 2 C Identity User Flow User Attribute Assignments Set Order"
					]
				}
			}
		},
		{
			"displayName": "POST /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments/microsoft.graph.setOrder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Actions"
					],
					"operation": [
						"Identity B 2 X User Flows B 2 X Identity User Flow User Attribute Assignments Set Order"
					]
				}
			}
		},
		{
			"displayName": "New Assignment Order",
			"name": "newAssignmentOrder",
			"type": "json",
			"default": "{\n  \"order\": [\n    null\n  ]\n}",
			"routing": {
				"send": {
					"property": "newAssignmentOrder",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Actions"
					],
					"operation": [
						"Identity B 2 X User Flows B 2 X Identity User Flow User Attribute Assignments Set Order"
					]
				}
			}
		},
		{
			"displayName": "POST /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/microsoft.graph.updateAllowedCombinations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Actions"
					],
					"operation": [
						"Identity Conditional Access Authentication Strength Policies Authentication Strength Policy Update Allowed Combinations"
					]
				}
			}
		},
		{
			"displayName": "Allowed Combinations",
			"name": "allowedCombinations",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "allowedCombinations",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Actions"
					],
					"operation": [
						"Identity Conditional Access Authentication Strength Policies Authentication Strength Policy Update Allowed Combinations"
					]
				}
			}
		},
		{
			"displayName": "POST /identity/customAuthenticationExtensions/microsoft.graph.validateAuthenticationConfiguration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Actions"
					],
					"operation": [
						"Identity Custom Authentication Extensions Validate Authentication Configuration"
					]
				}
			}
		},
		{
			"displayName": "Authentication Configuration",
			"name": "authenticationConfiguration",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "authenticationConfiguration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Actions"
					],
					"operation": [
						"Identity Custom Authentication Extensions Validate Authentication Configuration"
					]
				}
			}
		},
		{
			"displayName": "Endpoint Configuration",
			"name": "endpointConfiguration",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "endpointConfiguration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Actions"
					],
					"operation": [
						"Identity Custom Authentication Extensions Validate Authentication Configuration"
					]
				}
			}
		},
		{
			"displayName": "POST /identity/customAuthenticationExtensions/{customAuthenticationExtension-id}/microsoft.graph.validateAuthenticationConfiguration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Actions"
					],
					"operation": [
						"Identity Custom Authentication Extensions Custom Authentication Extension Validate Authentication Configuration"
					]
				}
			}
		},
];
