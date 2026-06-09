import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementAdvancedThreatProtectionOnboardingStateSummaryDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Advanced Threat Protection Onboarding State Summary"
					]
				}
			},
			"options": [
				{
					"name": "Device Management Delete Advanced Threat Protection Onboarding State Summary",
					"value": "Device Management Delete Advanced Threat Protection Onboarding State Summary",
					"action": "Delete navigation property advancedThreatProtectionOnboardingStateSummary for deviceManagement",
					"description": "Delete navigation property advancedThreatProtectionOnboardingStateSummary for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/advancedThreatProtectionOnboardingStateSummary"
						}
					}
				},
				{
					"name": "Device Management Get Advanced Threat Protection Onboarding State Summary",
					"value": "Device Management Get Advanced Threat Protection Onboarding State Summary",
					"action": "Get advancedThreatProtectionOnboardingStateSummary from deviceManagement",
					"description": "The summary state of ATP onboarding state for this account.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/advancedThreatProtectionOnboardingStateSummary"
						}
					}
				},
				{
					"name": "Device Management Update Advanced Threat Protection Onboarding State Summary",
					"value": "Device Management Update Advanced Threat Protection Onboarding State Summary",
					"action": "Update the navigation property advancedThreatProtectionOnboardingStateSummary in deviceManagement",
					"description": "Update the navigation property advancedThreatProtectionOnboardingStateSummary in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/advancedThreatProtectionOnboardingStateSummary"
						}
					}
				},
				{
					"name": "Device Management Advanced Threat Protection Onboarding State Summary List Advanced Threat Protection Onboarding Device Setting States",
					"value": "Device Management Advanced Threat Protection Onboarding State Summary List Advanced Threat Protection Onboarding Device Setting States",
					"action": "Get advancedThreatProtectionOnboardingDeviceSettingStates from deviceManagement",
					"description": "Not yet documented",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/advancedThreatProtectionOnboardingStateSummary/advancedThreatProtectionOnboardingDeviceSettingStates"
						}
					}
				},
				{
					"name": "Device Management Advanced Threat Protection Onboarding State Summary Create Advanced Threat Protection Onboarding Device Setting States",
					"value": "Device Management Advanced Threat Protection Onboarding State Summary Create Advanced Threat Protection Onboarding Device Setting States",
					"action": "Create new navigation property to advancedThreatProtectionOnboardingDeviceSettingStates for deviceManagement",
					"description": "Create new navigation property to advancedThreatProtectionOnboardingDeviceSettingStates for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/advancedThreatProtectionOnboardingStateSummary/advancedThreatProtectionOnboardingDeviceSettingStates"
						}
					}
				},
				{
					"name": "Device Management Advanced Threat Protection Onboarding State Summary Delete Advanced Threat Protection Onboarding Device Setting States",
					"value": "Device Management Advanced Threat Protection Onboarding State Summary Delete Advanced Threat Protection Onboarding Device Setting States",
					"action": "Delete navigation property advancedThreatProtectionOnboardingDeviceSettingStates for deviceManagement",
					"description": "Delete navigation property advancedThreatProtectionOnboardingDeviceSettingStates for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/advancedThreatProtectionOnboardingStateSummary/advancedThreatProtectionOnboardingDeviceSettingStates/{{$parameter[\"advancedThreatProtectionOnboardingDeviceSettingState-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Advanced Threat Protection Onboarding State Summary Get Advanced Threat Protection Onboarding Device Setting States",
					"value": "Device Management Advanced Threat Protection Onboarding State Summary Get Advanced Threat Protection Onboarding Device Setting States",
					"action": "Get advancedThreatProtectionOnboardingDeviceSettingStates from deviceManagement",
					"description": "Not yet documented",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/advancedThreatProtectionOnboardingStateSummary/advancedThreatProtectionOnboardingDeviceSettingStates/{{$parameter[\"advancedThreatProtectionOnboardingDeviceSettingState-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Advanced Threat Protection Onboarding State Summary Update Advanced Threat Protection Onboarding Device Setting States",
					"value": "Device Management Advanced Threat Protection Onboarding State Summary Update Advanced Threat Protection Onboarding Device Setting States",
					"action": "Update the navigation property advancedThreatProtectionOnboardingDeviceSettingStates in deviceManagement",
					"description": "Update the navigation property advancedThreatProtectionOnboardingDeviceSettingStates in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/advancedThreatProtectionOnboardingStateSummary/advancedThreatProtectionOnboardingDeviceSettingStates/{{$parameter[\"advancedThreatProtectionOnboardingDeviceSettingState-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /deviceManagement/advancedThreatProtectionOnboardingStateSummary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Advanced Threat Protection Onboarding State Summary"
					],
					"operation": [
						"Device Management Delete Advanced Threat Protection Onboarding State Summary"
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
						"Device Management Advanced Threat Protection Onboarding State Summary"
					],
					"operation": [
						"Device Management Delete Advanced Threat Protection Onboarding State Summary"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/advancedThreatProtectionOnboardingStateSummary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Advanced Threat Protection Onboarding State Summary"
					],
					"operation": [
						"Device Management Get Advanced Threat Protection Onboarding State Summary"
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
						"Device Management Advanced Threat Protection Onboarding State Summary"
					],
					"operation": [
						"Device Management Get Advanced Threat Protection Onboarding State Summary"
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
						"Device Management Advanced Threat Protection Onboarding State Summary"
					],
					"operation": [
						"Device Management Get Advanced Threat Protection Onboarding State Summary"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/advancedThreatProtectionOnboardingStateSummary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Advanced Threat Protection Onboarding State Summary"
					],
					"operation": [
						"Device Management Update Advanced Threat Protection Onboarding State Summary"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/advancedThreatProtectionOnboardingStateSummary<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Advanced Threat Protection Onboarding State Summary"
					],
					"operation": [
						"Device Management Update Advanced Threat Protection Onboarding State Summary"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/advancedThreatProtectionOnboardingStateSummary/advancedThreatProtectionOnboardingDeviceSettingStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Advanced Threat Protection Onboarding State Summary"
					],
					"operation": [
						"Device Management Advanced Threat Protection Onboarding State Summary List Advanced Threat Protection Onboarding Device Setting States"
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
						"Device Management Advanced Threat Protection Onboarding State Summary"
					],
					"operation": [
						"Device Management Advanced Threat Protection Onboarding State Summary List Advanced Threat Protection Onboarding Device Setting States"
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
						"Device Management Advanced Threat Protection Onboarding State Summary"
					],
					"operation": [
						"Device Management Advanced Threat Protection Onboarding State Summary List Advanced Threat Protection Onboarding Device Setting States"
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
						"Device Management Advanced Threat Protection Onboarding State Summary"
					],
					"operation": [
						"Device Management Advanced Threat Protection Onboarding State Summary List Advanced Threat Protection Onboarding Device Setting States"
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
						"Device Management Advanced Threat Protection Onboarding State Summary"
					],
					"operation": [
						"Device Management Advanced Threat Protection Onboarding State Summary List Advanced Threat Protection Onboarding Device Setting States"
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
						"Device Management Advanced Threat Protection Onboarding State Summary"
					],
					"operation": [
						"Device Management Advanced Threat Protection Onboarding State Summary List Advanced Threat Protection Onboarding Device Setting States"
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
						"Device Management Advanced Threat Protection Onboarding State Summary"
					],
					"operation": [
						"Device Management Advanced Threat Protection Onboarding State Summary List Advanced Threat Protection Onboarding Device Setting States"
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
						"Device Management Advanced Threat Protection Onboarding State Summary"
					],
					"operation": [
						"Device Management Advanced Threat Protection Onboarding State Summary List Advanced Threat Protection Onboarding Device Setting States"
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
						"Device Management Advanced Threat Protection Onboarding State Summary"
					],
					"operation": [
						"Device Management Advanced Threat Protection Onboarding State Summary List Advanced Threat Protection Onboarding Device Setting States"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/advancedThreatProtectionOnboardingStateSummary/advancedThreatProtectionOnboardingDeviceSettingStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Advanced Threat Protection Onboarding State Summary"
					],
					"operation": [
						"Device Management Advanced Threat Protection Onboarding State Summary Create Advanced Threat Protection Onboarding Device Setting States"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/advancedThreatProtectionOnboardingStateSummary/advancedThreatProtectionOnboardingDeviceSettingStates<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Advanced Threat Protection Onboarding State Summary"
					],
					"operation": [
						"Device Management Advanced Threat Protection Onboarding State Summary Create Advanced Threat Protection Onboarding Device Setting States"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/advancedThreatProtectionOnboardingStateSummary/advancedThreatProtectionOnboardingDeviceSettingStates/{advancedThreatProtectionOnboardingDeviceSettingState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Advanced Threat Protection Onboarding State Summary"
					],
					"operation": [
						"Device Management Advanced Threat Protection Onboarding State Summary Delete Advanced Threat Protection Onboarding Device Setting States"
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
						"Device Management Advanced Threat Protection Onboarding State Summary"
					],
					"operation": [
						"Device Management Advanced Threat Protection Onboarding State Summary Delete Advanced Threat Protection Onboarding Device Setting States"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/advancedThreatProtectionOnboardingStateSummary/advancedThreatProtectionOnboardingDeviceSettingStates/{advancedThreatProtectionOnboardingDeviceSettingState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Advanced Threat Protection Onboarding State Summary"
					],
					"operation": [
						"Device Management Advanced Threat Protection Onboarding State Summary Get Advanced Threat Protection Onboarding Device Setting States"
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
						"Device Management Advanced Threat Protection Onboarding State Summary"
					],
					"operation": [
						"Device Management Advanced Threat Protection Onboarding State Summary Get Advanced Threat Protection Onboarding Device Setting States"
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
						"Device Management Advanced Threat Protection Onboarding State Summary"
					],
					"operation": [
						"Device Management Advanced Threat Protection Onboarding State Summary Get Advanced Threat Protection Onboarding Device Setting States"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/advancedThreatProtectionOnboardingStateSummary/advancedThreatProtectionOnboardingDeviceSettingStates/{advancedThreatProtectionOnboardingDeviceSettingState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Advanced Threat Protection Onboarding State Summary"
					],
					"operation": [
						"Device Management Advanced Threat Protection Onboarding State Summary Update Advanced Threat Protection Onboarding Device Setting States"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/advancedThreatProtectionOnboardingStateSummary/advancedThreatProtectionOnboardingDeviceSettingStates/{advancedThreatProtectionOnboardingDeviceSettingState-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Advanced Threat Protection Onboarding State Summary"
					],
					"operation": [
						"Device Management Advanced Threat Protection Onboarding State Summary Update Advanced Threat Protection Onboarding Device Setting States"
					]
				}
			}
		},
];
