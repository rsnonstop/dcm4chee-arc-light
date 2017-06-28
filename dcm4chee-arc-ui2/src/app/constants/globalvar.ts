export class Globalvar {
    public static get MODALITIES(): any {
        return {
            'common': {
                'CR': 'Computed Radiography',
                'CT': 'Computed Tomography',
                'DX': 'Digital Radiography',
                'KO': 'Key Object Selection',
                'MR': 'Magnetic Resonance',
                'MG': 'Mammography',
                'NM': 'Nuclear Medicine',
                'OT': 'Other',
                'PT': 'Positron emission tomography (PET)',
                'PR': 'Presentation State',
                'US': 'Ultrasound',
                'XA': 'X-Ray Angiography'
            },
            'more': {
                'AR': 'Autorefraction',
                'AU': 'Audio',
                'BDUS': 'Bone Densitometry (ultrasound)',
                'BI': 'Biomagnetic imaging',
                'BMD': 'Bone Densitometry (X-Ray)',
                'DOC': 'Document',
                'DG': 'Diaphanography',
                'ECG': 'Electrocardiography',
                'EPS': 'Cardiac Electrophysiology',
                'ES': 'Endoscopy',
                'FID': 'Fiducials',
                'GM': 'General Microscopy',
                'HC': 'Hard Copy',
                'HD': 'Hemodynamic Waveform',
                'IO': 'Intra-Oral Radiography',
                'IOL': 'Intraocular Lens Data',
                'IVOCT': 'Intravascular Optical Coherence Tomography',
                'IVUS': 'Intravascular Ultrasound',
                'KER': 'Keratometry',
                'LEN': 'Lensometry',
                'LS': 'Laser surface scan',
                'OAM': 'Ophthalmic Axial Measurements',
                'OCT': 'Optical Coherence Tomography (non-Ophthalmic)',
                'OP': 'Ophthalmic Photography',
                'OPM': 'Ophthalmic Mapping',
                'OPT': 'Ophthalmic Tomography',
                'OPV': 'Ophthalmic Visual Field',
                'OSS': 'Optical Surface Scan',
                'PLAN': 'Plan',
                'PX': 'Panoramic X-Ray',
                'REG': 'Registration',
                'RESP': 'Respiratory Waveform',
                'RF': 'Radio Fluoroscopy',
                'RG': 'Radiographic imaging (conventional film/screen)',
                'RTDOSE': 'Radiotherapy Dose',
                'RTIMAGE': 'Radiotherapy Image',
                'RTPLAN': 'Radiotherapy Plan',
                'RTRECORD': 'RT Treatment Record',
                'RTSTRUCT': 'Radiotherapy Structure Set',
                'RWV': 'Real World Value Map',
                'SEG': 'Segmentation',
                'SM': 'Slide Microscopy',
                'SMR': 'Stereometric Relationship',
                'SR': 'SR Document',
                'SRF': 'Subjective Refraction',
                'STAIN': 'Automated Slide Stainer',
                'TG': 'Thermography',
                'VA': 'Visual Acuity',
                'XC': 'External-camera Photography'
            }
        };
    }
    public static get OPTIONS(): any{
        return  {genders:
            [
                {
                    obj: {
                        'vr': 'CS',
                        'Value': ['F']
                    },
                    'title': 'Female'
                },
                {
                    obj: {
                        'vr': 'CS',
                        'Value': ['M']
                    },
                    'title': 'Male'
                },
                {
                    obj: {
                        'vr': 'CS',
                        'Value': ['O']
                    },
                    'title': 'Other'
                }
            ]
        };
    }
    public static get ORDERBY(): Array<any>{
        return [
            {
                value: 'PatientName',
                label: '<label>Patient</label><span class=\"glyphicon glyphicon-sort-by-alphabet\"></span>',
                mode: 'patient',
                title:'Query Patients'
            },
            {
                value: '-PatientName',
                label: '<label>Patient</label><span class=\"orderbynamedesc\"></span>',
                mode: 'patient',
                title:'Query Patients'
            },
            {

                value: '-StudyDate,-StudyTime',
                label: '<label>Study</label><span class=\"orderbydateasc\"></span>',
                mode: 'study',
                title:'Query Studies'
            },
            {
                value: 'StudyDate,StudyTime',
                label: '<label>Study</label><span class=\"orderbydatedesc\"></span>',
                mode: 'study',
                title:'Query Studies'
            },
            {
                value: 'PatientName,-StudyDate,-StudyTime',
                label: '<label>Study</label><span class=\"glyphicon glyphicon-sort-by-alphabet\"></span><span class=\"orderbydateasc\"></span>',
                mode: 'study',
                title:'Query Studies'
            },
            {
                value: '-PatientName,-StudyDate,-StudyTime',
                label: '<label>Study</label><span class=\"orderbynamedesc\"></span><span class=\"orderbydateasc\"></span>',
                mode: 'study',
                title:'Query Studies'
            },
            {
                value: 'PatientName,StudyDate,StudyTime',
                label: '<label>Study</label><span class=\"glyphicon glyphicon-sort-by-alphabet\"></span><span class=\"orderbydatedesc\"></span>',
                mode: 'study',
                title:'Query Studies'
            },
            {
                value: '-PatientName,StudyDate,StudyTime',
                label: '<label>Study</label><span class=\"orderbynamedesc\"></span><span class=\"orderbydatedesc\"></span>',
                mode: 'study',
                title:'Query Studies'
            },
            {
                value: '-ScheduledProcedureStepSequence.ScheduledProcedureStepStartDate,-ScheduledProcedureStepSequence.ScheduledProcedureStepStartTime',
                label: '<label>MWL</label></span><span class=\"orderbydateasc\"></span>',
                mode: 'mwl',
                title:'Query MWL'
            },
            {
                value: 'ScheduledProcedureStepSequence.ScheduledProcedureStepStartDate,ScheduledProcedureStepSequence.ScheduledProcedureStepStartTime',
                label: '<label>MWL</label><span class=\"orderbydatedesc\"></span>',
                mode: 'mwl',
                title:'Query MWL'
            },
            {
                value: 'PatientName,-ScheduledProcedureStepSequence.ScheduledProcedureStepStartDate,-ScheduledProcedureStepSequence.ScheduledProcedureStepStartTime',
                label: '<label>MWL</label><span class=\"glyphicon glyphicon-sort-by-alphabet\"></span><span class=\"orderbydateasc\"></span>',
                mode: 'mwl',
                title:'Query MWL'
            },
            {
                value: '-PatientName,-ScheduledProcedureStepSequence.ScheduledProcedureStepStartDate,-ScheduledProcedureStepSequence.ScheduledProcedureStepStartTime',
                label: '<label>MWL</label><span class=\"orderbynamedesc\"></span><span class=\"orderbydateasc\"></span>',
                mode: 'mwl',
                title:'Query MWL'
            },
            {
                value: 'PatientName,ScheduledProcedureStepSequence.ScheduledProcedureStepStartDate,ScheduledProcedureStepSequence.ScheduledProcedureStepStartTime',
                label: '<label>MWL</label><span class=\"glyphicon glyphicon-sort-by-alphabet\"></span><span class=\"orderbydatedesc\"></span>',
                mode: 'mwl',
                title:'Query MWL'
            },
            {
                value: '-PatientName,ScheduledProcedureStepSequence.ScheduledProcedureStepStartDate,ScheduledProcedureStepSequence.ScheduledProcedureStepStartTime',
                label: '<label>MWL</label><span class=\"orderbynamedesc\"></span><span class=\"orderbydatedesc\"></span>',
                mode: 'mwl',
                title:'Query MWL'
            },
            {
                value: '',
                label: '<label>Diff </label><i class="material-icons">compare_arrows</i></span>',
                mode: 'diff',
                title:'Make diff between two archives'
            }
        ];

    }
    /*
    * Defines action for replacing placehoders/title or disabling elements when you edit or create patient,mwl or study
    * Used in helpers/placeholderchanger.directive.ts
    * */
    public static get IODPLACEHOLDERS(): any{
        return {
            '00100020': {
                'create': {
                    placeholder: 'To generate it automatically leave it blank',
                    action: 'replace'
                }
            },
            '0020000D': {
                'create': {
                    placeholder: 'To generate it automatically leave it blank',
                    action: 'replace'
                },
                'edit': {
                    action: 'disable'
                }
            },
            '00400009': {
                'edit': {
                    action: 'disable'
                }
            }
        };
    };

    public static get ELASTICSEARCHDOMAIN(): any{
        return "http://localhost:9200";
    };

    public static get STUDIESSTOREDCOUNTS_PARAMETERS(): any{
        return {
            "size": 0,
            "aggs": {
                "1": {
                    "cardinality": {
                        "field": "Study.ParticipantObjectID"
                    }
                }
            },
            "highlight": {
                "fields": {
                    "*": {}
                },
                "require_field_match": false,
                "fragment_size": 2147483647
            },
            "query": {
                "bool": {
                    "must": [
                        {
                            "query_string": {
                                "query": "EventID.csd-code:110104 AND Event.EventActionCode:C",
                                "analyze_wildcard": true
                            }
                        },
                        {
                            "query_string": {
                                "analyze_wildcard": true,
                                "query": "*"
                            }
                        }
                    ],
                    "must_not": []
                }
            },
            "_source": {
                "excludes": []
            }
        };
    };

    public static get QUERIESUSERID_PARAMETERS(): any{
        return {
            "size": 0,
            "aggs": {
                "2": {
                    "date_histogram": {
                        "field": "Event.EventDateTime",
                        "interval": "3h",
                        "time_zone": "Europe/Berlin",
                        "min_doc_count": 1
                    },
                    "aggs": {
                        "3": {
                            "terms": {
                                "field": "Source.UserID",
                                "size": 15,
                                "order": {
                                    "_count": "desc"
                                }
                            }
                        }
                    }
                }
            },
            "query": {
                "bool": {
                    "must": [
                        {
                            "query_string": {
                                "query": "EventID.csd-code:110112 AND (Destination.UserID:DCM4CHEE OR Destination.UserID:ANOTHER_AET)",
                                "analyze_wildcard": true
                            }
                        }
                    ],
                    "must_not": []
                }
            },
            "_source": {
                "excludes": []
            }
        };
    }
    public static get ERRORSCOUNTS_PARAMETERS(): any{
        return {
            "size": 0,
            "aggs": {},
            "highlight": {
                "fields": {
                    "*": {}
                },
                "require_field_match": false,
                "fragment_size": 2147483647
            },
            "query": {
                "bool": {
                    "must": [
                        {
                            "query_string": {
                                "query": "NOT Event.EventOutcomeIndicator:0",
                                "analyze_wildcard": true
                            }
                        },
                        {
                            "query_string": {
                                "analyze_wildcard": true,
                                "query": "*"
                            }
                        }
                    ],
                    "must_not": []
                }
            },
            "_source": {
                "excludes": []
            }
        }
    }
    public static get QUERIESCOUNTS_PARAMETERS(): any{
        return {
            "query": {
                "bool": {
                    "must": [
                        {
                            "query_string": {
                                "query": "EventID.csd-code:110112 AND Destination.UserID:ARCHIVEACT",
                                "analyze_wildcard": true
                            }
                        },
                        {
                            "query_string": {
                                "analyze_wildcard": true,
                                "query": "*"
                            }
                        }
                    ],
                    "must_not": []
                }
            },
            "size": 0,
            "_source": {
                "excludes": []
            },
            "aggs": {}
        }
    }
    public static get RETRIEVCOUNTS_PARAMETERS(): any{
        return {
            "size": 0,
            "aggs": {},
            "query": {
                "bool": {
                    "must": [
                        {
                            "query_string": {
                                "query": "EventID.csd-code:110104 AND Event.EventActionCode:R",
                                "analyze_wildcard": true
                            }
                        },
                        {
                            "query_string": {
                                "analyze_wildcard": true,
                                "query": "*"
                            }
                        }
                    ],
                    "must_not": []
                }
            },
            "_source": {
                "excludes": []
            }
        };
    }
    public static get AUDITEVENTS_PARAMETERS(): any{
        return {
            "query": {
                "bool": {
                    "must": [
                        {
                            "query_string": {
                                "query": "*",
                                "analyze_wildcard": true
                            }
                        },
                        {
                            "query_string": {
                                "analyze_wildcard": true,
                                "query": "*"
                            }
                        }
                    ],
                    "must_not": []
                }
            },
            "size": 3000,
            "sort": [
                {
                    "Event.EventDateTime": {
                        "order": "desc",
                        "unmapped_type": "boolean"
                    }
                }
            ],
            "_source": {
                "excludes": []
            },
            "stored_fields": [
                "*"
            ],
            "script_fields": {},
            "docvalue_fields": [
                "audit.EventIdentification.EventDateTime",
                "Event.EventDateTime",
                "StudyDate",
                "@timestamp",
                "syslog_timestamp"
            ]
        };
    }
}
