import type { INodeProperties } from 'n8n-workflow';

export const identityIdentityContainerDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Identity Container"
					]
				}
			},
			"options": [
				{
					"name": "Identity Identity Container Get Identity Container",
					"value": "Identity Identity Container Get Identity Container",
					"action": "Get identity",
					"description": "Get identity",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identity"
						}
					}
				},
				{
					"name": "Identity Identity Container Update Identity Container",
					"value": "Identity Identity Container Update Identity Container",
					"action": "Update identity",
					"description": "Update identity",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identity"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /identity",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Identity Container"
					],
					"operation": [
						"Identity Identity Container Get Identity Container"
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
						"Identity Identity Container"
					],
					"operation": [
						"Identity Identity Container Get Identity Container"
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
						"Identity Identity Container"
					],
					"operation": [
						"Identity Identity Container Get Identity Container"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identity",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Identity Container"
					],
					"operation": [
						"Identity Identity Container Update Identity Container"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Odata Type",
			"name": "@odata-type",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "@odata.type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Identity Container"
					],
					"operation": [
						"Identity Identity Container Update Identity Container"
					]
				}
			}
		},
		{
			"displayName": "Api Connectors",
			"name": "apiConnectors",
			"type": "json",
			"default": "[\n  {\n    \"authenticationConfiguration\": {}\n  }\n]",
			"description": "Represents entry point for API connectors.",
			"routing": {
				"send": {
					"property": "apiConnectors",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Identity Container"
					],
					"operation": [
						"Identity Identity Container Update Identity Container"
					]
				}
			}
		},
		{
			"displayName": "Authentication Event Listeners",
			"name": "authenticationEventListeners",
			"type": "json",
			"default": "[\n  {\n    \"conditions\": {\n      \"applications\": {\n        \"includeApplications\": [\n          {}\n        ]\n      }\n    }\n  }\n]",
			"routing": {
				"send": {
					"property": "authenticationEventListeners",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Identity Container"
					],
					"operation": [
						"Identity Identity Container Update Identity Container"
					]
				}
			}
		},
		{
			"displayName": "B 2 C User Flows",
			"name": "b2cUserFlows",
			"type": "json",
			"default": "[\n  {\n    \"apiConnectorConfiguration\": {\n      \"postAttributeCollection\": {\n        \"authenticationConfiguration\": {}\n      },\n      \"postFederationSignup\": {},\n      \"preTokenIssuance\": {}\n    },\n    \"identityProviders\": [\n      {}\n    ],\n    \"languages\": [\n      {\n        \"defaultPages\": [\n          {}\n        ],\n        \"overridesPages\": [\n          {}\n        ]\n      }\n    ],\n    \"userAttributeAssignments\": [\n      {\n        \"userAttribute\": {},\n        \"userAttributeValues\": [\n          {}\n        ]\n      }\n    ],\n    \"userFlowIdentityProviders\": [\n      {}\n    ]\n  }\n]",
			"description": "Represents entry point for B2C identity userflows.",
			"routing": {
				"send": {
					"property": "b2cUserFlows",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Identity Container"
					],
					"operation": [
						"Identity Identity Container Update Identity Container"
					]
				}
			}
		},
		{
			"displayName": "B 2 X User Flows",
			"name": "b2xUserFlows",
			"type": "json",
			"default": "[\n  {\n    \"apiConnectorConfiguration\": {\n      \"postAttributeCollection\": {\n        \"authenticationConfiguration\": {}\n      },\n      \"postFederationSignup\": {},\n      \"preTokenIssuance\": {}\n    },\n    \"identityProviders\": [\n      {}\n    ],\n    \"languages\": [\n      {\n        \"defaultPages\": [\n          {}\n        ],\n        \"overridesPages\": [\n          {}\n        ]\n      }\n    ],\n    \"userAttributeAssignments\": [\n      {\n        \"userAttribute\": {},\n        \"userAttributeValues\": [\n          {}\n        ]\n      }\n    ],\n    \"userFlowIdentityProviders\": [\n      {}\n    ]\n  }\n]",
			"description": "Represents entry point for B2X and self-service sign-up identity userflows.",
			"routing": {
				"send": {
					"property": "b2xUserFlows",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Identity Container"
					],
					"operation": [
						"Identity Identity Container Update Identity Container"
					]
				}
			}
		},
		{
			"displayName": "Conditional Access",
			"name": "conditionalAccess",
			"type": "string",
			"default": {
				"authenticationContextClassReferences": [
					{}
				],
				"authenticationStrength": {
					"authenticationCombinations": [
						null
					],
					"authenticationMethodModes": [
						{}
					],
					"combinations": [
						{}
					],
					"policies": [
						{
							"allowedCombinations": [
								{}
							],
							"combinationConfigurations": [
								{
									"appliesToCombinations": [
										{}
									]
								}
							]
						}
					]
				},
				"authenticationStrengths": {},
				"namedLocations": [
					{}
				],
				"policies": [
					{
						"conditions": {
							"applications": {
								"applicationFilter": {},
								"excludeApplications": [
									null
								],
								"includeApplications": [
									null
								],
								"includeAuthenticationContextClassReferences": [
									null
								],
								"includeUserActions": [
									null
								]
							},
							"clientAppTypes": [
								null
							],
							"clientApplications": {
								"excludeServicePrincipals": [
									null
								],
								"includeServicePrincipals": [
									null
								],
								"servicePrincipalFilter": {}
							},
							"deviceStates": {
								"excludeStates": [
									null
								],
								"includeStates": [
									null
								]
							},
							"devices": {
								"deviceFilter": {},
								"excludeDeviceStates": [
									null
								],
								"excludeDevices": [
									null
								],
								"includeDeviceStates": [
									null
								],
								"includeDevices": [
									null
								]
							},
							"locations": {
								"excludeLocations": [
									null
								],
								"includeLocations": [
									null
								]
							},
							"platforms": {
								"excludePlatforms": [
									null
								],
								"includePlatforms": [
									{}
								]
							},
							"servicePrincipalRiskLevels": [
								null
							],
							"signInRiskLevels": [
								{}
							],
							"userRiskLevels": [
								{}
							],
							"users": {
								"excludeGroups": [
									null
								],
								"excludeGuestsOrExternalUsers": {
									"externalTenants": {}
								},
								"excludeRoles": [
									null
								],
								"excludeUsers": [
									null
								],
								"includeGroups": [
									null
								],
								"includeGuestsOrExternalUsers": {},
								"includeRoles": [
									null
								],
								"includeUsers": [
									null
								]
							}
						},
						"grantControls": {
							"authenticationStrength": {},
							"builtInControls": [
								null
							],
							"customAuthenticationFactors": [
								null
							],
							"termsOfUse": [
								null
							]
						},
						"sessionControls": {
							"applicationEnforcedRestrictions": {
								"@odata.type": "#microsoft.graph.applicationEnforcedRestrictionsSessionControl"
							},
							"cloudAppSecurity": {
								"@odata.type": "#microsoft.graph.cloudAppSecuritySessionControl"
							},
							"continuousAccessEvaluation": {},
							"persistentBrowser": {
								"@odata.type": "#microsoft.graph.persistentBrowserSessionControl"
							},
							"signInFrequency": {
								"@odata.type": "#microsoft.graph.signInFrequencySessionControl"
							}
						}
					}
				],
				"templates": [
					{
						"details": {
							"conditions": {},
							"grantControls": {},
							"sessionControls": {}
						}
					}
				]
			},
			"routing": {
				"send": {
					"property": "conditionalAccess",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Identity Container"
					],
					"operation": [
						"Identity Identity Container Update Identity Container"
					]
				}
			}
		},
		{
			"displayName": "Continuous Access Evaluation Policy",
			"name": "continuousAccessEvaluationPolicy",
			"type": "string",
			"default": {
				"groups": [
					null
				],
				"users": [
					null
				]
			},
			"routing": {
				"send": {
					"property": "continuousAccessEvaluationPolicy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Identity Container"
					],
					"operation": [
						"Identity Identity Container Update Identity Container"
					]
				}
			}
		},
		{
			"displayName": "Custom Authentication Extensions",
			"name": "customAuthenticationExtensions",
			"type": "json",
			"default": "[\n  {\n    \"@odata.type\": \"#microsoft.graph.customAuthenticationExtension\",\n    \"authenticationConfiguration\": {},\n    \"clientConfiguration\": {},\n    \"endpointConfiguration\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "customAuthenticationExtensions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Identity Container"
					],
					"operation": [
						"Identity Identity Container Update Identity Container"
					]
				}
			}
		},
		{
			"displayName": "Identity Providers",
			"name": "identityProviders",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "Represents entry point for identity provider base.",
			"routing": {
				"send": {
					"property": "identityProviders",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Identity Container"
					],
					"operation": [
						"Identity Identity Container Update Identity Container"
					]
				}
			}
		},
		{
			"displayName": "User Flow Attributes",
			"name": "userFlowAttributes",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "Represents entry point for identity userflow attributes.",
			"routing": {
				"send": {
					"property": "userFlowAttributes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Identity Container"
					],
					"operation": [
						"Identity Identity Container Update Identity Container"
					]
				}
			}
		},
		{
			"displayName": "User Flows",
			"name": "userFlows",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "userFlows",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Identity Container"
					],
					"operation": [
						"Identity Identity Container Update Identity Container"
					]
				}
			}
		},
];
