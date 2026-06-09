import type { INodeProperties } from 'n8n-workflow';

export const identityGovernanceTermsOfUseContainerDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Terms Of Use Container"
					]
				}
			},
			"options": [
				{
					"name": "Identity Governance Delete Terms Of Use",
					"value": "Identity Governance Delete Terms Of Use",
					"action": "Delete navigation property termsOfUse for identityGovernance",
					"description": "Delete navigation property termsOfUse for identityGovernance",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identityGovernance/termsOfUse"
						}
					}
				},
				{
					"name": "Identity Governance Get Terms Of Use",
					"value": "Identity Governance Get Terms Of Use",
					"action": "Get termsOfUse from identityGovernance",
					"description": "Get termsOfUse from identityGovernance",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/termsOfUse"
						}
					}
				},
				{
					"name": "Identity Governance Update Terms Of Use",
					"value": "Identity Governance Update Terms Of Use",
					"action": "Update the navigation property termsOfUse in identityGovernance",
					"description": "Update the navigation property termsOfUse in identityGovernance",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identityGovernance/termsOfUse"
						}
					}
				},
				{
					"name": "Identity Governance Terms Of Use List Agreement Acceptances",
					"value": "Identity Governance Terms Of Use List Agreement Acceptances",
					"action": "Get agreementAcceptances from identityGovernance",
					"description": "Represents the current status of a user's response to a company's customizable terms of use agreement.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/termsOfUse/agreementAcceptances"
						}
					}
				},
				{
					"name": "Identity Governance Terms Of Use Create Agreement Acceptances",
					"value": "Identity Governance Terms Of Use Create Agreement Acceptances",
					"action": "Create new navigation property to agreementAcceptances for identityGovernance",
					"description": "Create new navigation property to agreementAcceptances for identityGovernance",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identityGovernance/termsOfUse/agreementAcceptances"
						}
					}
				},
				{
					"name": "Identity Governance Terms Of Use Delete Agreement Acceptances",
					"value": "Identity Governance Terms Of Use Delete Agreement Acceptances",
					"action": "Delete navigation property agreementAcceptances for identityGovernance",
					"description": "Delete navigation property agreementAcceptances for identityGovernance",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identityGovernance/termsOfUse/agreementAcceptances/{{$parameter[\"agreementAcceptance-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Terms Of Use Get Agreement Acceptances",
					"value": "Identity Governance Terms Of Use Get Agreement Acceptances",
					"action": "Get agreementAcceptances from identityGovernance",
					"description": "Represents the current status of a user's response to a company's customizable terms of use agreement.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/termsOfUse/agreementAcceptances/{{$parameter[\"agreementAcceptance-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Terms Of Use Update Agreement Acceptances",
					"value": "Identity Governance Terms Of Use Update Agreement Acceptances",
					"action": "Update the navigation property agreementAcceptances in identityGovernance",
					"description": "Update the navigation property agreementAcceptances in identityGovernance",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identityGovernance/termsOfUse/agreementAcceptances/{{$parameter[\"agreementAcceptance-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Terms Of Use List Agreements",
					"value": "Identity Governance Terms Of Use List Agreements",
					"action": "List agreements",
					"description": "Retrieve a list of agreement objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/termsOfUse/agreements"
						}
					}
				},
				{
					"name": "Identity Governance Terms Of Use Create Agreements",
					"value": "Identity Governance Terms Of Use Create Agreements",
					"action": "Create agreement",
					"description": "Create a new agreement object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identityGovernance/termsOfUse/agreements"
						}
					}
				},
				{
					"name": "Identity Governance Terms Of Use Delete Agreements",
					"value": "Identity Governance Terms Of Use Delete Agreements",
					"action": "Delete navigation property agreements for identityGovernance",
					"description": "Delete navigation property agreements for identityGovernance",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identityGovernance/termsOfUse/agreements/{{$parameter[\"agreement-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Terms Of Use Get Agreements",
					"value": "Identity Governance Terms Of Use Get Agreements",
					"action": "Get agreements from identityGovernance",
					"description": "Represents a tenant's customizable terms of use agreement that's created and managed with Azure Active Directory (Azure AD).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/termsOfUse/agreements/{{$parameter[\"agreement-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Terms Of Use Update Agreements",
					"value": "Identity Governance Terms Of Use Update Agreements",
					"action": "Update the navigation property agreements in identityGovernance",
					"description": "Update the navigation property agreements in identityGovernance",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identityGovernance/termsOfUse/agreements/{{$parameter[\"agreement-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Terms Of Use Agreements List Acceptances",
					"value": "Identity Governance Terms Of Use Agreements List Acceptances",
					"action": "List acceptances",
					"description": "Get the details about the acceptance records for a specific agreement.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/termsOfUse/agreements/{{$parameter[\"agreement-id\"]}}/acceptances"
						}
					}
				},
				{
					"name": "Identity Governance Terms Of Use Agreements Create Acceptances",
					"value": "Identity Governance Terms Of Use Agreements Create Acceptances",
					"action": "Create new navigation property to acceptances for identityGovernance",
					"description": "Create new navigation property to acceptances for identityGovernance",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identityGovernance/termsOfUse/agreements/{{$parameter[\"agreement-id\"]}}/acceptances"
						}
					}
				},
				{
					"name": "Identity Governance Terms Of Use Agreements Delete Acceptances",
					"value": "Identity Governance Terms Of Use Agreements Delete Acceptances",
					"action": "Delete navigation property acceptances for identityGovernance",
					"description": "Delete navigation property acceptances for identityGovernance",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identityGovernance/termsOfUse/agreements/{{$parameter[\"agreement-id\"]}}/acceptances/{{$parameter[\"agreementAcceptance-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Terms Of Use Agreements Get Acceptances",
					"value": "Identity Governance Terms Of Use Agreements Get Acceptances",
					"action": "Get acceptances from identityGovernance",
					"description": "Read-only. Information about acceptances of this agreement.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/termsOfUse/agreements/{{$parameter[\"agreement-id\"]}}/acceptances/{{$parameter[\"agreementAcceptance-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Terms Of Use Agreements Update Acceptances",
					"value": "Identity Governance Terms Of Use Agreements Update Acceptances",
					"action": "Update the navigation property acceptances in identityGovernance",
					"description": "Update the navigation property acceptances in identityGovernance",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identityGovernance/termsOfUse/agreements/{{$parameter[\"agreement-id\"]}}/acceptances/{{$parameter[\"agreementAcceptance-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Terms Of Use Agreements Delete File",
					"value": "Identity Governance Terms Of Use Agreements Delete File",
					"action": "Delete navigation property file for identityGovernance",
					"description": "Delete navigation property file for identityGovernance",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identityGovernance/termsOfUse/agreements/{{$parameter[\"agreement-id\"]}}/file"
						}
					}
				},
				{
					"name": "Identity Governance Terms Of Use Agreements Get File",
					"value": "Identity Governance Terms Of Use Agreements Get File",
					"action": "Get agreementFile",
					"description": "Retrieve the details of the default file for an agreement, including the language and version information. The file information is specified through the agreementFile object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/termsOfUse/agreements/{{$parameter[\"agreement-id\"]}}/file"
						}
					}
				},
				{
					"name": "Identity Governance Terms Of Use Agreements Update File",
					"value": "Identity Governance Terms Of Use Agreements Update File",
					"action": "Update the navigation property file in identityGovernance",
					"description": "Update the navigation property file in identityGovernance",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identityGovernance/termsOfUse/agreements/{{$parameter[\"agreement-id\"]}}/file"
						}
					}
				},
				{
					"name": "Identity Governance Terms Of Use Agreements File List Localizations",
					"value": "Identity Governance Terms Of Use Agreements File List Localizations",
					"action": "Get localizations from identityGovernance",
					"description": "The localized version of the terms of use agreement files attached to the agreement.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/termsOfUse/agreements/{{$parameter[\"agreement-id\"]}}/file/localizations"
						}
					}
				},
				{
					"name": "Identity Governance Terms Of Use Agreements File Create Localizations",
					"value": "Identity Governance Terms Of Use Agreements File Create Localizations",
					"action": "Create new navigation property to localizations for identityGovernance",
					"description": "Create new navigation property to localizations for identityGovernance",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identityGovernance/termsOfUse/agreements/{{$parameter[\"agreement-id\"]}}/file/localizations"
						}
					}
				},
				{
					"name": "Identity Governance Terms Of Use Agreements File Delete Localizations",
					"value": "Identity Governance Terms Of Use Agreements File Delete Localizations",
					"action": "Delete navigation property localizations for identityGovernance",
					"description": "Delete navigation property localizations for identityGovernance",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identityGovernance/termsOfUse/agreements/{{$parameter[\"agreement-id\"]}}/file/localizations/{{$parameter[\"agreementFileLocalization-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Terms Of Use Agreements File Get Localizations",
					"value": "Identity Governance Terms Of Use Agreements File Get Localizations",
					"action": "Get localizations from identityGovernance",
					"description": "The localized version of the terms of use agreement files attached to the agreement.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/termsOfUse/agreements/{{$parameter[\"agreement-id\"]}}/file/localizations/{{$parameter[\"agreementFileLocalization-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Terms Of Use Agreements File Update Localizations",
					"value": "Identity Governance Terms Of Use Agreements File Update Localizations",
					"action": "Update the navigation property localizations in identityGovernance",
					"description": "Update the navigation property localizations in identityGovernance",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identityGovernance/termsOfUse/agreements/{{$parameter[\"agreement-id\"]}}/file/localizations/{{$parameter[\"agreementFileLocalization-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Terms Of Use Agreements File Localizations List Versions",
					"value": "Identity Governance Terms Of Use Agreements File Localizations List Versions",
					"action": "Get versions from identityGovernance",
					"description": "Read-only. Customized versions of the terms of use agreement in the Azure AD tenant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/termsOfUse/agreements/{{$parameter[\"agreement-id\"]}}/file/localizations/{{$parameter[\"agreementFileLocalization-id\"]}}/versions"
						}
					}
				},
				{
					"name": "Identity Governance Terms Of Use Agreements File Localizations Create Versions",
					"value": "Identity Governance Terms Of Use Agreements File Localizations Create Versions",
					"action": "Create new navigation property to versions for identityGovernance",
					"description": "Create new navigation property to versions for identityGovernance",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identityGovernance/termsOfUse/agreements/{{$parameter[\"agreement-id\"]}}/file/localizations/{{$parameter[\"agreementFileLocalization-id\"]}}/versions"
						}
					}
				},
				{
					"name": "Identity Governance Terms Of Use Agreements File Localizations Delete Versions",
					"value": "Identity Governance Terms Of Use Agreements File Localizations Delete Versions",
					"action": "Delete navigation property versions for identityGovernance",
					"description": "Delete navigation property versions for identityGovernance",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identityGovernance/termsOfUse/agreements/{{$parameter[\"agreement-id\"]}}/file/localizations/{{$parameter[\"agreementFileLocalization-id\"]}}/versions/{{$parameter[\"agreementFileVersion-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Terms Of Use Agreements File Localizations Get Versions",
					"value": "Identity Governance Terms Of Use Agreements File Localizations Get Versions",
					"action": "Get versions from identityGovernance",
					"description": "Read-only. Customized versions of the terms of use agreement in the Azure AD tenant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/termsOfUse/agreements/{{$parameter[\"agreement-id\"]}}/file/localizations/{{$parameter[\"agreementFileLocalization-id\"]}}/versions/{{$parameter[\"agreementFileVersion-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Terms Of Use Agreements File Localizations Update Versions",
					"value": "Identity Governance Terms Of Use Agreements File Localizations Update Versions",
					"action": "Update the navigation property versions in identityGovernance",
					"description": "Update the navigation property versions in identityGovernance",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identityGovernance/termsOfUse/agreements/{{$parameter[\"agreement-id\"]}}/file/localizations/{{$parameter[\"agreementFileLocalization-id\"]}}/versions/{{$parameter[\"agreementFileVersion-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Terms Of Use Agreements List Files",
					"value": "Identity Governance Terms Of Use Agreements List Files",
					"action": "Get files from identityGovernance",
					"description": "PDFs linked to this agreement. Note: This property is in the process of being deprecated. Use the  file property instead.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/termsOfUse/agreements/{{$parameter[\"agreement-id\"]}}/files"
						}
					}
				},
				{
					"name": "Identity Governance Terms Of Use Agreements Create Files",
					"value": "Identity Governance Terms Of Use Agreements Create Files",
					"action": "Create agreementFileLocalization",
					"description": "Create a new localized agreement file.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identityGovernance/termsOfUse/agreements/{{$parameter[\"agreement-id\"]}}/files"
						}
					}
				},
				{
					"name": "Identity Governance Terms Of Use Agreements Delete Files",
					"value": "Identity Governance Terms Of Use Agreements Delete Files",
					"action": "Delete navigation property files for identityGovernance",
					"description": "Delete navigation property files for identityGovernance",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identityGovernance/termsOfUse/agreements/{{$parameter[\"agreement-id\"]}}/files/{{$parameter[\"agreementFileLocalization-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Terms Of Use Agreements Get Files",
					"value": "Identity Governance Terms Of Use Agreements Get Files",
					"action": "Get files from identityGovernance",
					"description": "PDFs linked to this agreement. Note: This property is in the process of being deprecated. Use the  file property instead.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/termsOfUse/agreements/{{$parameter[\"agreement-id\"]}}/files/{{$parameter[\"agreementFileLocalization-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Terms Of Use Agreements Update Files",
					"value": "Identity Governance Terms Of Use Agreements Update Files",
					"action": "Update the navigation property files in identityGovernance",
					"description": "Update the navigation property files in identityGovernance",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identityGovernance/termsOfUse/agreements/{{$parameter[\"agreement-id\"]}}/files/{{$parameter[\"agreementFileLocalization-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Terms Of Use Agreements Files List Versions",
					"value": "Identity Governance Terms Of Use Agreements Files List Versions",
					"action": "Get versions from identityGovernance",
					"description": "Read-only. Customized versions of the terms of use agreement in the Azure AD tenant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/termsOfUse/agreements/{{$parameter[\"agreement-id\"]}}/files/{{$parameter[\"agreementFileLocalization-id\"]}}/versions"
						}
					}
				},
				{
					"name": "Identity Governance Terms Of Use Agreements Files Create Versions",
					"value": "Identity Governance Terms Of Use Agreements Files Create Versions",
					"action": "Create new navigation property to versions for identityGovernance",
					"description": "Create new navigation property to versions for identityGovernance",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identityGovernance/termsOfUse/agreements/{{$parameter[\"agreement-id\"]}}/files/{{$parameter[\"agreementFileLocalization-id\"]}}/versions"
						}
					}
				},
				{
					"name": "Identity Governance Terms Of Use Agreements Files Delete Versions",
					"value": "Identity Governance Terms Of Use Agreements Files Delete Versions",
					"action": "Delete navigation property versions for identityGovernance",
					"description": "Delete navigation property versions for identityGovernance",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identityGovernance/termsOfUse/agreements/{{$parameter[\"agreement-id\"]}}/files/{{$parameter[\"agreementFileLocalization-id\"]}}/versions/{{$parameter[\"agreementFileVersion-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Terms Of Use Agreements Files Get Versions",
					"value": "Identity Governance Terms Of Use Agreements Files Get Versions",
					"action": "Get versions from identityGovernance",
					"description": "Read-only. Customized versions of the terms of use agreement in the Azure AD tenant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/termsOfUse/agreements/{{$parameter[\"agreement-id\"]}}/files/{{$parameter[\"agreementFileLocalization-id\"]}}/versions/{{$parameter[\"agreementFileVersion-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Terms Of Use Agreements Files Update Versions",
					"value": "Identity Governance Terms Of Use Agreements Files Update Versions",
					"action": "Update the navigation property versions in identityGovernance",
					"description": "Update the navigation property versions in identityGovernance",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identityGovernance/termsOfUse/agreements/{{$parameter[\"agreement-id\"]}}/files/{{$parameter[\"agreementFileLocalization-id\"]}}/versions/{{$parameter[\"agreementFileVersion-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /identityGovernance/termsOfUse",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Delete Terms Of Use"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Delete Terms Of Use"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/termsOfUse",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Get Terms Of Use"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Get Terms Of Use"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Get Terms Of Use"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/termsOfUse",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Update Terms Of Use"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/termsOfUse<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Update Terms Of Use"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/termsOfUse/agreementAcceptances",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use List Agreement Acceptances"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use List Agreement Acceptances"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use List Agreement Acceptances"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use List Agreement Acceptances"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use List Agreement Acceptances"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use List Agreement Acceptances"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use List Agreement Acceptances"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use List Agreement Acceptances"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use List Agreement Acceptances"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/termsOfUse/agreementAcceptances",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Create Agreement Acceptances"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/termsOfUse/agreementAcceptances<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Create Agreement Acceptances"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identityGovernance/termsOfUse/agreementAcceptances/{agreementAcceptance-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Delete Agreement Acceptances"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Delete Agreement Acceptances"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/termsOfUse/agreementAcceptances/{agreementAcceptance-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Get Agreement Acceptances"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Get Agreement Acceptances"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Get Agreement Acceptances"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/termsOfUse/agreementAcceptances/{agreementAcceptance-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Update Agreement Acceptances"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/termsOfUse/agreementAcceptances/{agreementAcceptance-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Update Agreement Acceptances"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/termsOfUse/agreements",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use List Agreements"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use List Agreements"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use List Agreements"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use List Agreements"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use List Agreements"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use List Agreements"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use List Agreements"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use List Agreements"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use List Agreements"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/termsOfUse/agreements",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Create Agreements"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/termsOfUse/agreements<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Create Agreements"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identityGovernance/termsOfUse/agreements/{agreement-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Delete Agreements"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Delete Agreements"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/termsOfUse/agreements/{agreement-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Get Agreements"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Get Agreements"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Get Agreements"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/termsOfUse/agreements/{agreement-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Update Agreements"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/termsOfUse/agreements/{agreement-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Update Agreements"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/termsOfUse/agreements/{agreement-id}/acceptances",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements List Acceptances"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements List Acceptances"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements List Acceptances"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements List Acceptances"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements List Acceptances"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements List Acceptances"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements List Acceptances"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements List Acceptances"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements List Acceptances"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/termsOfUse/agreements/{agreement-id}/acceptances",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements Create Acceptances"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/termsOfUse/agreements/{agreement-id}/acceptances<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements Create Acceptances"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identityGovernance/termsOfUse/agreements/{agreement-id}/acceptances/{agreementAcceptance-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements Delete Acceptances"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements Delete Acceptances"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/termsOfUse/agreements/{agreement-id}/acceptances/{agreementAcceptance-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements Get Acceptances"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements Get Acceptances"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements Get Acceptances"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/termsOfUse/agreements/{agreement-id}/acceptances/{agreementAcceptance-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements Update Acceptances"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/termsOfUse/agreements/{agreement-id}/acceptances/{agreementAcceptance-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements Update Acceptances"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identityGovernance/termsOfUse/agreements/{agreement-id}/file",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements Delete File"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements Delete File"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/termsOfUse/agreements/{agreement-id}/file",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements Get File"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements Get File"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements Get File"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/termsOfUse/agreements/{agreement-id}/file",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements Update File"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/termsOfUse/agreements/{agreement-id}/file<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements Update File"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements File List Localizations"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements File List Localizations"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements File List Localizations"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements File List Localizations"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements File List Localizations"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements File List Localizations"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements File List Localizations"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements File List Localizations"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements File List Localizations"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements File Create Localizations"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements File Create Localizations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements File Delete Localizations"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements File Delete Localizations"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements File Get Localizations"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements File Get Localizations"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements File Get Localizations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements File Update Localizations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements File Update Localizations"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements File Localizations List Versions"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements File Localizations List Versions"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements File Localizations List Versions"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements File Localizations List Versions"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements File Localizations List Versions"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements File Localizations List Versions"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements File Localizations List Versions"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements File Localizations List Versions"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements File Localizations List Versions"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements File Localizations Create Versions"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements File Localizations Create Versions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements File Localizations Delete Versions"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements File Localizations Delete Versions"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements File Localizations Get Versions"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements File Localizations Get Versions"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements File Localizations Get Versions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements File Localizations Update Versions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/termsOfUse/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements File Localizations Update Versions"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/termsOfUse/agreements/{agreement-id}/files",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements List Files"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements List Files"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements List Files"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements List Files"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements List Files"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements List Files"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements List Files"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements List Files"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements List Files"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/termsOfUse/agreements/{agreement-id}/files",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements Create Files"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/termsOfUse/agreements/{agreement-id}/files<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements Create Files"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identityGovernance/termsOfUse/agreements/{agreement-id}/files/{agreementFileLocalization-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements Delete Files"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements Delete Files"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/termsOfUse/agreements/{agreement-id}/files/{agreementFileLocalization-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements Get Files"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements Get Files"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements Get Files"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/termsOfUse/agreements/{agreement-id}/files/{agreementFileLocalization-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements Update Files"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/termsOfUse/agreements/{agreement-id}/files/{agreementFileLocalization-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements Update Files"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/termsOfUse/agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements Files List Versions"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements Files List Versions"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements Files List Versions"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements Files List Versions"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements Files List Versions"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements Files List Versions"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements Files List Versions"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements Files List Versions"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements Files List Versions"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/termsOfUse/agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements Files Create Versions"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/termsOfUse/agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements Files Create Versions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identityGovernance/termsOfUse/agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements Files Delete Versions"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements Files Delete Versions"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/termsOfUse/agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements Files Get Versions"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements Files Get Versions"
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
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements Files Get Versions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/termsOfUse/agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements Files Update Versions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/termsOfUse/agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Terms Of Use Container"
					],
					"operation": [
						"Identity Governance Terms Of Use Agreements Files Update Versions"
					]
				}
			}
		},
];
